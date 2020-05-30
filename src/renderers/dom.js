import React from 'react';
import ReactDOM from 'react-dom';

import App from '../App/App';

import '../styles/index.css';

ReactDOM.hydrate(
  <App initialData={window.__R_DATA.initialData} />,
  document.getElementById('root')
);
