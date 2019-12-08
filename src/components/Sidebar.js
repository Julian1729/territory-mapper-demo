import React from 'react';

export default class Sidebar extends React.Component {

  render(){
    return (
      <div id="sidebar-container">

        <div className="inner">

          <table id="data-table">
            <tr>
              <th>Street</th>
              <th>Hundred</th>
              <th>Side</th>
              <th>Address Count</th>
            </tr>
          </table>

          <button>clear polygons</button>
          <button>collect data</button>

        </div>

      </div>
    )
  }

}
