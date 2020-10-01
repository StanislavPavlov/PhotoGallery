import React, {useState} from 'react'
import {View, Image, ActivityIndicator} from "react-native";
import {useRoute} from "@react-navigation/native";

import {styles} from './styles'

const FullImage = () => {

    const [loading, setLoading] = useState(false);

    const handleLoading = () => {
        setLoading(!loading)
    };

    const {params} = useRoute();
    const {uri} = params;

    return(
        <View>
            <View style={styles.imageContainer}>
                {loading && <ActivityIndicator size='large' color={'grey'} style={styles.loadingIndicator}/>}
                <Image source={{uri: uri}}
                       style={styles.image}
                       onLoadStart={() => handleLoading()}
                       onLoadEnd={() => handleLoading()}
                />
            </View>
        </View>

    )
}

export default FullImage
