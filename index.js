// Import a library to hep create a component
import React from 'react'
import { AppRegistry } from 'react-native'
import App from './App'
import { name as appName } from './app.json'


// Render it to the device
AppRegistry.registerComponent(appName, () => App);
