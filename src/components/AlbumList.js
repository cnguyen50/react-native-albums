import React, { Component } from 'react'
import { View } from 'react-native'
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
    return this.state.albums.map(album => 
      <AlbumDetail key={album.title} album={album}/>
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