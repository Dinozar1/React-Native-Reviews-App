import React from 'react';
import { StyleSheet, Button, TextInput, View, Text,TouchableOpacity } from 'react-native';

export default function FlatButton(props)
{
    return(
        <TouchableOpacity onPress={props.fun}>
            <View style={styles.button}>
                <Text style={styles.buttonText }>{props.text}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:
    {
        borderRadius: 8,
        paddingVertical: 14,
        paddingHorizontal: 10,
        backgroundColor: '#f01d71',

    },
    buttonText:
    {
        color: 'white',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        fontSize: 16,
        textAlign: 'center'
    }
    
  })