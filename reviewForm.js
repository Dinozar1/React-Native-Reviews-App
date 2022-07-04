import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from './styles/global.js';
import { Formik } from 'formik';

export default function Form() {

  return (
    
    

  <View>
  <Formik
    initialValues={{ title: '', body: '', rating: '' }}
    onSubmit={(values) => {
      console.log(values);
    }}
  >
    {props => (
      <View>
        <TextInput
          style={globalStyles.input}
          placeholder='Review title'
          onChangeText={props.handleChange('title')}
          value={props.values.title}
        />

        <TextInput
          style={globalStyles.input}
          multiline
          placeholder='Review details'
          onChangeText={props.handleChange('body')}
          value={props.values.body}
        />

        <TextInput 
          style={globalStyles.input}
          placeholder='Rating (1 - 5)'
          onChangeText={props.handleChange('rating')}
          value={props.values.rating}
          keyboardType='numeric'
        />
        
        <Button color='maroon' title="Submit" style={globalStyles.button} onPress={props.handleSubmit} /> 
      </View>
    )}
  </Formik>
</View>
    
  );
}


const styles = StyleSheet.create({

    loginContainer: {
      width: '80%',
      alignItems: 'center',
      backgroundColor: 'white',
      padding: 10,
      elevation: 10,
      backgroundColor: '#e6e6e6'
    },
    textInput: {
        padding: 10,
        borderWidth: 1,
        height: 40,
        margin: 12,
        fontSize: 18,
        borderColor: '#ddd',
        borderRadius: 6,
        marginBottom: 20
    },
  })