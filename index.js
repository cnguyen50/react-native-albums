// Import a library to hep create a component
import React from 'react'
import ReactNative from 'react-native'

// Create a component
const App = () => {
  return (
    <Text>Some Text</Text>
  )
}

// Render it to the device
ReactNative.AppRegistry.registerComponent('albums', () => App);
