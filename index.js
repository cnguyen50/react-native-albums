// Import a library to hep create a component
import React from 'react'
import { AppRegistry } from 'react-native'
import App from './App'

// Create a component
  const App = () => {
    return (
      <Text>Some Text</Text>
    )
  }

// Render it to the device
AppRegistry.registerComponent(appName, () => App);
