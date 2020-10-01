import React, {useState, useEffect} from 'react';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Gallery from '../screens/GalleryScreen/container'
import FullImage from '../screens/ImageScreen'

const {Navigator, Screen} = createStackNavigator();

export const MainStackNavigator = () => {
    return (
        <NavigationContainer>
            <Navigator>
                <Screen name={"Gallery"}
                        component={Gallery}
                />
                <Screen name={"Image"}
                        component={FullImage}
                />
            </Navigator>
        </NavigationContainer>
    )
}