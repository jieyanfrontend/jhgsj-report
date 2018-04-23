import React from 'react';
class Charts extends React.Component{
    state = {
      dv: null
    };
    BizCharts = {};
    DataSet = {};
    render(){
        const { dv } = this.state;
      let { Chart, Axis, Geom, Tooltip, Coord, Legend } = this.BizCharts;
        return !!dv ? (
            <Chart height={300} data={dv} forceFit padding={['0', '0', '0','60']}>
                <Legend />
                <Coord transpose scale={[1,-1]}/>
                <Axis name="label" label={{offset: 5}} />
                <Axis name="value" position={'right'} />
                <Tooltip />
                <Geom type="interval" position="label*value" color={'type'} adjust={[{
                    type: 'dodge',
                    marginRatio: 1 / 16
                }]}/>

            </Chart>) : null;
    }
    componentDidMount(){
      this.download(this.props);
    }
    componentWillReceiveProps(nextProps){
        this.download(nextProps);
    }
    download = (props) => {
      let status = 0;//0,表示未开始 1表示已下载好一个资源 2表示下载两个资源
      import('bizcharts').then(r => {
        status++;
        this.BizCharts = r;
        if(status === 2)this.renderChart(props);
      });
      import('../../data-set.js').then(r => {
        status++;
        this.DataSet = r.default;
        if(status === 2)this.renderChart(props);
      });
    };
    renderChart = ({ data, fields}) => {
        if(!Array.isArray(data) || !Array.isArray(fields)) return;
        let DataSet = this.DataSet;
        const ds = new DataSet();
        const dv = ds.createView().source(data);
        dv.transform({
            type: 'fold',
            fields: fields, // 展开字段集
            key: 'type', // key字段
            value: 'value', // value字段
        });
        this.setState({
            dv
        })
    }
}
export default Charts;