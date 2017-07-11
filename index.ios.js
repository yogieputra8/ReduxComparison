/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import configureStore from './src/configureStore';
import App from './src/App';

const store = configureStore;

const ReduxComparison = () => (
  <Provider store={store}>
    <App />
  </Provider>
)


AppRegistry.registerComponent('ReduxComparison', () => ReduxComparison);
