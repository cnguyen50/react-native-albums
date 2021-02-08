import React, { Component } from 'react'
import { Text, View } from 'react-native'
import axios from 'axios'


class AlbumList extends Component {
  componentWillMount() {
    axios.get('https://https://rallycoding.herokuapp.com/api/music_albums')
      .then(res => console.log(res))
      .catch(err => console.log(err))
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