import React from 'react';
import { View, StyleSheet } from 'react-native';
import { HomeScreen, LoginScreen } from '../screens';

const Routes = (props) => {
    let currentScreen = <HomeScreen />
    if(props.screen == "LoginScreen") {
        currentScreen = <LoginScreen />
    }
    return(
        <View style={ styles.body }>
            { currentScreen }
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
      flex: 1,
      backgroundColor: '#5db075',
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default Routes;