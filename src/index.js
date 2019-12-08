import React from 'react';
import ReactDom from 'react-dom';

import Sidebar from './components/Sidebar';
import Map from './components/Map';
import './styles/styles.sass';

const root = document.getElementById('app');

const MapDemoApp = () => (
  <>
    <Map />
    <Sidebar />
  </>
)

ReactDom.render(<MapDemoApp />, root);
