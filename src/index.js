import React from 'react';
import ReactDom from 'react-dom';

import Map from './components/Map';

const root = document.getElementById('app');

const MapDemoApp = () => (
  <>
    <Map />
  </>
)

ReactDom.render(<MapDemoApp />, root);
