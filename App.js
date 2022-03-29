import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ActivityIndicatorScreen from './src/screens/ActivityIndicatorScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen name="HomeScreen">
          {props => <HomeScreen {...props} />}
          </Stack.Screen>
        <Stack.Screen name="ActivityIndicatorScreen" component={ActivityIndicatorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;