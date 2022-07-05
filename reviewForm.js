import React from 'react';
import { StyleSheet, Button, TextInput, View, Text } from 'react-native';
import { globalStyles } from './styles/global.js';
import { Formik } from 'formik';
import * as yup from 'yup';
import FlatButton from './styles/customButton.js';


const reviewSchema = yup.object().shape({
  title: yup.string().required().min(4),
   body: yup.string().required().min(8),
   rating: yup.string()
    .required()
    .test('is-num-1-5', 'Rating must be a number 1 - 5', (val) => {
      return parseInt(val) < 6 && parseInt(val) > 0;
    })
  })


export default function Form({functions}) {


  return (
  <View>
  <Formik
    initialValues={{ title: '', body: '', rating: '' }}
    validationSchema={reviewSchema}
    onSubmit={(values) => {
      console.log(values)
      functions(values)
    }}
  >
    {props => (
      <View>
        <TextInput
          style={globalStyles.input}
          placeholder='Review title'
          onChangeText={props.handleChange('title')}
          value={props.values.title}
          onBlur={props.handleBlur('title')}
        />
        <Text style={globalStyles.errorText}>{props.touched.title && props.errors.title}</Text>
        <TextInput
          style={globalStyles.input}
          multiline
          placeholder='Review details'
          onChangeText={props.handleChange('body')}
          value={props.values.body}
          onBlur={props.handleBlur('body')}
          minHeight={60}
        />
        <Text style={globalStyles.errorText}>{ props.touched.body && props.errors.body}</Text>
        <TextInput 
          style={globalStyles.input}
          placeholder='Rating (1 - 5)'
          onChangeText={props.handleChange('rating')}
          value={props.values.rating}
          keyboardType='numeric'
          onBlur={props.handleBlur('rating')}
        />
        <Text style={globalStyles.errorText}>{props.touched.rating && props.errors.rating}</Text>
        <FlatButton fun={props.handleSubmit} text='submit' />
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