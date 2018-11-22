import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import Card from './Card';
import CardSection from './CardSection';
import Button from './Button';

/**
 * Example of a functional component. We do not need the compoennt lifecycle here
 */
const AlbumDetail = ({album}) => {
    const { title, artist, thumbnail_image, image } = album

    return (
        <Card>
            {/* Header Section */}
            <CardSection>
                <View style={ styles.thumbnailContainerStyle }>
                    <Image
                        style={ styles.thumbnailStyle }
                        source={{uri: thumbnail_image }}
                    />
                </View>
                <View style={ styles.headerContentStyle }>
                    <Text style={ styles.headerTextStyle }>{ title }</Text>
                    <Text>{ artist }</Text>
                </View>
            </CardSection>
            {/* Album Image View */}
            <CardSection>
            <Image
                        style={ styles.imageStyle }
                        source={{uri: image }}
                    />
            </CardSection>
            {/* Buy Now Button */}
            <CardSection>
                <Button onPress={() => {console.log(title)}}/>
            </CardSection>
        </Card>
    )
};

const styles = StyleSheet.create({
	headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    headerTextStyle: {
        fontSize: 18
    },
    thumbnailStyle: {
        height: 50,
        width: 50
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10

    },
    imageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
});

export default AlbumDetail;
