import React from 'react';
import ReactDOM from 'react-dom';

import App from '../App/App';

import '../styles/index.css';

import WebFont from 'webfontloader';

WebFont.load({ google: { families: ['Muli', 'sans-serif'] } });

ReactDOM.hydrate(
  <App initialData={window.__R_DATA.initialData} />,
  document.getElementById('root')
);
