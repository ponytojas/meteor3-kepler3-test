import React from 'react';

import document from 'global/document';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import App from './App';
import store from './store';

Meteor.startup(async () => {
  createRoot(document.getElementById('react-target')).render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
});
