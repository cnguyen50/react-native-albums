import React, { Component } from 'react'
import { Text, View } from 'react-native'
import axios from 'axios'


class AlbumList extends Component {
  state = { albums: []}

  componentWillMount() {
    axios.get('https://https://rallycoding.herokuapp.com/api/music_albums')
      .then(res => this.setState({ albums: res.data }))
      .catch(err => console.log(err))
  }

  renderAlbums() {
    return this.state.albums.map( albums => <Text>{album.title}</Text> )
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