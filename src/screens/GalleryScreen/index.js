import React  from 'react'
import {View, Text, ActivityIndicator, FlatList} from "react-native";
import {useNavigation} from "@react-navigation/native";

import Card from '../../components/Card'

import {styles} from './styles'

const Gallery = ({data, isLoading, setLoading}) => {

    const {navigate} = useNavigation();

    const renderItem = ({item}) => {
        return (
            <Card item={item} navigate={navigate} isLoading={isLoading} setLoading={setLoading}/>
        )
    };

    return (
        <View style={styles.mainContainer}>
            <FlatList
                data={data}
                renderItem={renderItem}
            />
        </View>
    )
};

export default Gallery
