import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../App/App';

export async function serverRenderer() {
  const initialData = {
    appName: 'Designer Porfolio',
  };

  const pageData = {
    title: `Hello ${initialData.appName}`,
  };

  return Promise.resolve({
    initialData,
    initialMarkup: ReactDOMServer.renderToString(
      <App initialData={initialData} />
    ),
    pageData,
  });
}
