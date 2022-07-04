import React, {useState} from 'react';
import Home from './home';
import About from './about';
import ReviewDetalis from './reviewDetalis';
import { StyleSheet, View } from 'react-native';
import * as Font from 'expo-font'
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
import Header from './header';
import HeaderBG from './headerBG';

const getFonts = () => Font.loadAsync({
    'lato-regular': require('./fonts/Lato-Regular.ttf'),
    'lato-bold': require('./fonts/Lato-Bold.ttf')
  });

  const Stack = createNativeStackNavigator();
  const Drawer = createDrawerNavigator();

  const StackNavigator = () => 
  { 
    return(
      <Stack.Navigator >
        <Stack.Screen name="Home"  component={Home} options={{ headerTitle: () => <Header title={'Reviews List'}/>, headerBackground: () => <HeaderBG/> }} />
        <Stack.Screen name="Review Detalies" component={ReviewDetalis} />
      </Stack.Navigator>
    )
  }

  const SingleStackNavigator = () => 
  {
    return(
      <Stack.Navigator>
        <Stack.Screen name="About" component={About} options={{ headerTitle: () => <Header title={'About'}/>, headerBackground: () => <HeaderBG/>}} />
      </Stack.Navigator>
    )
  }

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

  if(fontsLoaded){
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
          <Drawer.Screen name="Home Page" component={StackNavigator} options={{headerShown: false}} />
          <Drawer.Screen name="About Page" component={SingleStackNavigator}/>
        </Drawer.Navigator>
      </NavigationContainer>
      
    );
  } else {
    return (
      <View style={{flex: 1}}>
        <AppLoading
          startAsync={getFonts}
          onFinish={()=> setFontsLoaded(true)} 
          onError={() => console.log('error')}
        />
      </View>
    )
  }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});