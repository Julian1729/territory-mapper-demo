import React from 'react';
import GoogleMapReact from 'google-map-react';

import philadelphiaGeoJson from '../data/Philadelphia.geo.json';

class Map extends React.Component {

  static defaultProps = {
    center: {
      lat: 40.0233371,
      lng: -75.1236217
    },
    zoom: 16
  };

  handleApiLoaded = ({map, maps}) => {
    // activate drawing manager
    var drawingManager = new maps.drawing.DrawingManager({
      drawingMode: maps.drawing.OverlayType.POLYGON,
      drawingControl: true,
      drawingControlOptions: {
        position: maps.ControlPosition.TOP_CENTER,
        drawingModes: ['polygon']
      },
      polygonOptions: {
        // make draggable markers appear to adjust bounds
        editable: true,
        fillColor: '#FFA300'
      }
    });

    drawingManager.setMap(map);

    map.data.addGeoJson(philadelphiaGeoJson);

  }


  render() {
    return (
      <>
        <div style={{ height: '100vh', width: '100vw' }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: 'AIzaSyBiYjXifeO5JNOK16O2wBdl6OduAvHr6Mo',
              libraries: 'drawing'
            }}
            defaultCenter={this.props.center}
            defaultZoom={this.props.zoom}
            yesIWantToUseGoogleMapApiInternals
            onGoogleApiLoaded={this.handleApiLoaded}
          >
          </GoogleMapReact>
        </div>
      </>
    );
  }
}

export default Map;
