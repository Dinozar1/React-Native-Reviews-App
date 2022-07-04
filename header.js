import React from "react";
import { View, Text, StyleSheet, Image} from "react-native";
import { Feather } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

export default function Header({title})
{
    const navigation = useNavigation()

    const openMenu = () => 
    {
        navigation.openDrawer()
    }

    return(
            <View style={styles.header }>
                <Feather name="menu" size={24} color="black" style={styles.icon} onPress={() => openMenu()} />
                <View style={styles.headerView}>
                    <Image source={require('./assets/heart_logo.png')} style={styles.headerIMG}/>
                    <Text style={styles.headerText}>{title}</Text>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({
    header:
    {
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        flex:1
         
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        width: 115,

    },
    icon:
    {
        position: 'absolute',
        left: 16,

    },
    headerIMG:
    {
        width:26,
        height:26,
        marginHorizontal: 13,
    },
    headerView:
    {
        flexDirection: 'row',
        
    },
})