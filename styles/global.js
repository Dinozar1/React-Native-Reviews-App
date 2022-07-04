import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
    container: 
    {
        flex: 1,
        padding:24,
    },
    titleText:
    {
        fontFamily: 'lato-regular',
        fontSize: 18,
        color: 'black'
    },
    paragraph:
    {
        marginVertical: 8,
        lineHeight: 20
    },
    input:
    {

        padding: 10,
        borderWidth: 1,
        height: 40,
        margin: 12,
        fontSize: 18,
        borderColor: '#ddd',
        borderRadius: 6,
        marginBottom: 20
    },
    button:
    {
        borderWidth: 3,
        borderColor: 'black',
        padding: 10,
        margin: 10,
        marginTop:100,
        elevation: 10
    }
})

export const images = 
{
    ratings:
    {
        '1': require('../assets/rating-1.png'),
        '2': require('../assets/rating-2.png'),
        '3': require('../assets/rating-3.png'),
        '4': require('../assets/rating-4.png'),
        '5': require('../assets/rating-5.png'),
    }
}