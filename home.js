import React, { useState } from "react";
import { View, Text, Button, FlatList, TouchableOpacity, Modal, StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native";
import { globalStyles } from './styles/global'
import Card from './styles/card'
import { Ionicons } from '@expo/vector-icons';
import Form from "./reviewForm";

export default function Home({navigation})
{
    const [modalOpen, setModalOpen] = useState(false);
    const [reviews, setReviews] = useState([{ title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
  ])

  const addReview = (review) => 
  {
    
    if(reviews[0].key === undefined)
    {
        review.key = '1'
    }
    else
    {
        review.key = (Number(reviews[reviews.length-1].key)+1).toString()
    }
    setReviews([...reviews, review])
  }

    return(
        <View style={globalStyles.container}>
            <Modal visible={modalOpen} animationType={'slide'} style={styles.modalContent}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View>
                        <Ionicons name="close" size={24} color="black" style={{...styles.modalClose, ...styles.modal }}  onPress={() => setModalOpen(false)}/>
                        <Form functions={addReview} />
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <Ionicons name="add" size={24} color="black" style={styles.modal } onPress={() => setModalOpen(true)}/>

            <FlatList
                data={reviews}
                renderItem={(item) => {return(
                    <TouchableOpacity onPress={() => navigation.navigate('Review Detalies', item)}>
                        <Card>
                            <Text>{item.item.title}</Text>
                        </Card>
                    </TouchableOpacity>
                )}}
            />
            
        </View>
    )
}

const styles = StyleSheet.create(
    {
        modal:
        {
            marginBottom: 10,
            borderWidth: 1,
            borderColor: '#f2f2f2',
            padding: 12,
            borderRadius: 10,
            alignSelf: 'center'
        },
        modalClose:
        {
            marginTop: 20,
            marginBottom: 0,
        },
        modalContent:
        {
            flex:1,
        }
    })