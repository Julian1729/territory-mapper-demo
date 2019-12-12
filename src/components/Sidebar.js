import React from 'react';
import { connect } from 'react-redux';

class Sidebar extends React.Component {

  handleCollectData = () => {

    console.log('collecdData calles');

  }

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
          <button onClick={this.handleCollectData}>collect data</button>

        </div>

      </div>
    )
  }

}

const mapStateToProps = state => (
  {
    polygons: state
  }
)

export default connect(mapStateToProps)(Sidebar);
