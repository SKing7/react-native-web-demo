import App from './src/Calculator';
import React from 'react';
import ReactNative, { AppRegistry } from 'react-native';

// register the app
AppRegistry.registerComponent('App', () => App);

AppRegistry.runApplication('App', {
  initialProps: {},
  rootTag: document.getElementById('react-app')
});
