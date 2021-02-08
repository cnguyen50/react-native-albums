import React, { Component } from 'react'
import { Text, View } from 'react-native'

class AlbumList extends Component {
  componentWillMount() {
    console.log("testing mount in list")
  }
  
  render() {
    return (
      <View>
        <Text> Album List</Text>
      </View>
    )
  }
}


export default AlbumList;