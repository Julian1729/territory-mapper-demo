import React from 'react';
import { connect } from 'react-redux';
import GoogleMapReact from 'google-map-react';

import {addPolygon} from '../actions/map';
import philadelphiaGeoJson from '../data/Philadelphia.geo.json';

class Map extends React.Component {

  static defaultProps = {
    center: {
      lat: 40.0233371,
      lng: -75.1236217
    },
    zoom: 16
  };

  handlePolygonComplete = polygon => {

    const path = [];
    polygon.getPath().forEach(LatLng => path.push([LatLng.lng(), LatLng.lat()]));
    // add first coordinate as last to complete polygon
    path.push(path[0]);
    this.props.addPolygon(path);

  }

  handleApiLoaded = ({map, maps}) => {
    // activate drawing manager
    var drawingManager = new maps.drawing.DrawingManager({
      drawingMode: null, // default to dragable hand
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

    drawingManager.addListener('polygoncomplete', this.handlePolygonComplete);

    drawingManager.setMap(map);

    // load Philadelphia boundaries into map
    map.data.addGeoJson(philadelphiaGeoJson);

    // fit maps to phila boundaries
    let phillyBoundCoords = philadelphiaGeoJson.features[0].geometry.coordinates[0][0];
    // create lat lng bounds
    let bounds = new maps.LatLngBounds();
    phillyBoundCoords.forEach(([lng, lat]) => {
      bounds.extend({lat, lng});
    });
    map.fitBounds(bounds);

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

const mapDispatchToProps = dispatch => (
  {
    addPolygon: polygon => dispatch(addPolygon(polygon))
  }
);

const mapStateToProps = (state, props) => (
  {
    polygons: state
  }
)

export default connect(mapStateToProps, mapDispatchToProps)(Map);
