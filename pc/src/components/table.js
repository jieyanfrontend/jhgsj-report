import React from 'react';
import { Table } from 'antd';
import createBodyRow from 'antd/es/table/createBodyRow';
let CoverTable = ({children, tFooter}) => {
  let Body = createBodyRow();
  return (
    <React.Fragment>
      <tr>
        {/*{children}*/}
      </tr>
      <tr>{tFooter.map(f => <td>{f}</td>)}</tr>
    </React.Fragment>
  )
};
let CoverAntdTable = props => (
  <Table components={{
    body: {
      row: (prop) => <CoverTable {...prop} tFooter={props.tFooter}/>,
    },footer: {
      row: CoverTable
    }
  }} dataSource={[{a:1,b:2,c:3},{a:11,b:22,c:33}]} columns={[{title: '1', dataIndex:'a'}, {title: '2', dataIndex:'b'}, {title:'3',dataIndex: 'c'}]}/>
);
export default CoverAntdTable;