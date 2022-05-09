import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from './screens/login';
import SignUpScreen from './screens/signup';
import { NativeBaseProvider, Box } from "native-base";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
          <NavigationContainer>
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen name="Login" component={SignInScreen} options={{ headerShown: false, headerTitleAlign: "center" }}/>
            <Stack.Screen name="Sign up" component={SignUpScreen} options={{ headerShown: false, headerTitleAlign: "center" }}/>

          </Stack.Navigator>
          </NavigationContainer>
    </NativeBaseProvider>
  );
}

