import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({
    cardContainer: {
        alignItems: 'center',
        marginVertical: 20
    },
    image: {
        width: 300,
        height: 300,
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
})
