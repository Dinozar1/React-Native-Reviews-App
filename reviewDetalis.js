import { View, Text, Button, Image, StyleSheet } from "react-native";
import { globalStyles, images } from './styles/global'
import Card from "./styles/card";
export default function ReviewDetalis({route, navigation})
{
    const {index, item} = route.params
    const rating = item.rating;

    return(
        <View style={globalStyles.container}>
            <Card>
                <Text>{item.title}</Text>
                <Text>{item.body}</Text>
                <View style={styles.rating }>
                    <Text>Rating:</Text>
                    <Image source={images.ratings[rating]}/>
                </View>
            </Card>
            <Button
                onPress={() => navigation.goBack()}
                title={'Home'}
            />
        </View>
    )
}

const styles = StyleSheet.create(
    {
        rating: {
            flexDirection: 'row',
            justifyContent: 'center',
            paddingTop: 16,
            marginTop: 16,
            borderTopWidth: 1,
            borderTopColor: '#eee',
            
        }
    })