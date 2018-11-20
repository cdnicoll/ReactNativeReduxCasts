import React from 'react';
import {
    View,
    Text
} from 'react-native';

/**
 * Example of a functional component. We do not need the compoennt lifecycle here
 */
const AlbumDetail = (props) => {
    const { album } = props

    return (
        <View>
            <Text>
                { album.title }
            </Text>
        </View>
    )
}

export default AlbumDetail;
