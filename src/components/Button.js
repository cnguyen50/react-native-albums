import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const Button = () => {
  const { buttonStyle } = styles

  return (
    <TouchableOpacity style={buttonStyle}>
      <Text>Click me</Text>
    </TouchableOpacity>
  )
}

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight:'600'
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007adff',
    marginLeft: 5,
    marginRight: 5
  }
}

export default Button