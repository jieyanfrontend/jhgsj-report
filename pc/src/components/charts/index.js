import React from 'react';
import { Chart, Axis, Geom, Tooltip, Coord, Legend } from 'bizcharts';
class Charts extends React.Component{
    state = {
      dv: null
    };
    render(){
        const { dv} = this.state;
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
    componentWillReceiveProps(nextProps){
        this.renderChart(nextProps);
        import('bizcharts').then(r => console.log(r))
    }
    renderChart = ({ data, fields, dataSource, columns }) => {
        if(!Array.isArray(data) || !Array.isArray(fields)) return;
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