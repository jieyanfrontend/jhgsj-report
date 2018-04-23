import React from 'react';
class TableWithFooter extends React.Component{
  render(){
    let { columns, dataSource } = this.props;
    return (
      <table>
        <thead>
        <tr>{columns.map(c => <td key={c.title}>{c.title}</td>)}</tr>
        </thead>
        <tbody>
        {dataSource.map(d => (<tr>
          {columns.map(c => <td>{d[c.dataIndex]}</td>)}
        </tr>))}
        </tbody>
        <tfoot>

        </tfoot>
      </table>
    )
  }
}
export default TableWithFooter;