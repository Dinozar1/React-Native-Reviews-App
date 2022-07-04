import React from 'react';
import { StyleSheet, ImageBackground, } from 'react-native';

export default function HeaderBg() {
    return(
        <ImageBackground source={ require('./assets/game_bg.png')} style={ styles.container }>
       
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        elevation: 3,
        borderRadius: 1,
    },
})