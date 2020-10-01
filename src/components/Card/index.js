import React, {useState}  from 'react'
import {Text, TouchableOpacity, Image, ActivityIndicator, View} from "react-native";


import {styles} from './styles'

const Card = ({item, navigate}) => {

    const [loading, setLoading] = useState(false);

    const handleNavigate = () => {
        navigate('Image', {uri:item.full})
    };

    const handleLoading = () => {
        setLoading(!loading)
    };

    return(
        <TouchableOpacity style={styles.cardContainer} onPress={handleNavigate} activeOpacity={0.8}>
            <View style={styles.imageContainer}>
                {loading && <ActivityIndicator size='large' color={'grey'} style={styles.loadingIndicator}/>}
                <Image source={{uri: item.raw}}
                       style={styles.image}
                       onLoadStart={() => handleLoading()}
                       onLoadEnd={() => handleLoading()}
                />
            </View>

            <Text>{item.user}</Text>
        </TouchableOpacity>

    )
};

export default Card;
