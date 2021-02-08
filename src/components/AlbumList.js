import React, { Component } from 'react'
import { Text, View } from 'react-native'
import axios from 'axios'
import AlbumDetail from './AlbumDetail'


class AlbumList extends Component {
  state = { albums: []}

  componentWillMount() {
    axios.get('https://https://rallycoding.herokuapp.com/api/music_albums')
      .then(res => this.setState({ albums: res.data }))
      .catch(err => console.log(err))
  }

  renderAlbums() {
    return this.state.albums.map(albums => 
      <AlbumDetail key={album.title}>{album.title}</AlbumDetail>
    )
  }

  render() {
    return (
      <View>
        {this.renderAlbums()}
      </View>
    )
  }
}


export default AlbumList;