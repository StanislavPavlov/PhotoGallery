import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain',
        backgroundColor: '#e3e3e3'
    },

    loadingIndicator: {
        position:'absolute',
        zIndex:99
    },

    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    }

});
