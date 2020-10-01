import React from 'react';
import {Provider} from 'react-redux';
import store from "./src/redux/store/store";

import {MainStackNavigator} from './src/navigation/mainStackNavigator'

export default function App() {

    return (
        <Provider store={store}>
            <MainStackNavigator/>
        </Provider>
    );

}
