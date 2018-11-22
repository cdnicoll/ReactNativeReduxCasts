import React from 'react';
import {
    Text
} from 'react-native';
import Card from './Card';

/**
 * Example of a functional component. We do not need the compoennt lifecycle here
 */
const AlbumDetail = (props) => {
    const { album } = props

    return (
        <Card>
            <Text>
                { album.title }
            </Text>
        </Card>
    )
};

export default AlbumDetail;
