import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import Sidebar from './components/Sidebar';
import configureStore from './store/configureStore';
import Map from './components/Map';
import './styles/styles.sass';

const root = document.getElementById('app');

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <Map />
    <Sidebar />
  </Provider>
);

ReactDom.render(jsx, root);
