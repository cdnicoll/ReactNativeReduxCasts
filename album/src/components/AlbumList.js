import React from 'react';
import {
    View,
    Text
} from 'react-native';
import axios from 'axios';

class AlbumList extends React.Component {
    state = { albums: [] };

    async componentWillMount() {
        try {
            const { data } = await axios.get('https://rallycoding.herokuapp.com/api/music_albums');
            this.setState({ albums: data });
        } catch(err) {
            console.log(err.response.data);
        }
    }

    renderAlbums() {
        return this.state.albums.map(album =>
            <Text key={album.title}>{ album.title }</Text>
        );
    }

    render() {
        return (
            <View>{ this.renderAlbums() }</View>
        );
    }
}

export default AlbumList;
