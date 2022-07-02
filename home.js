import React, { useState } from "react";
import { View, Text, Button, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from './styles/global'

export default function Home({navigation})
{
    const [reviews, setReviews] = useState([{ title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: '1' },
    { title: 'Gotta Catch Them All (again)', rating: 4, body: 'lorem ipsum', key: '2' },
    { title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: '3' },
  ])

    return(
        <View style={globalStyles.container}>
            <Text style={globalStyles.titleText}>Home Screen</Text>
            <FlatList
                data={reviews}
                renderItem={(item) => {return(
                    <TouchableOpacity onPress={() => navigation.navigate('Review Detalies', item)}>
                        <Text>
                            {item.item.title}
                        </Text>
                    </TouchableOpacity>
                )}}
            />
        </View>
    )
}

