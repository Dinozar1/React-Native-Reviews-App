import { View, Text, Button } from "react-native";
import { globalStyles } from './styles/global'

export default function ReviewDetalis({route, navigation})
{
    const {index, item} = route.params
    
    return(
        <View style={globalStyles.container}>
            <Text>{item.title}</Text>
            <Text>{item.body}</Text>
            <Text>{item.rating}</Text>
            <Button
                onPress={() => navigation.goBack()}
                title={'Home'}
            />
        </View>
    )
}
