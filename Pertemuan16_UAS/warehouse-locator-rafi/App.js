import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import HomeScreen from "./screens/HomeScreen"
import DetailScreen from "./screens/DetailScreen"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#0f766e",
          },
          headerTintColor: "#ffff",
          headerTitleStyle: {
            fontWeight: "bold"
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: "Warehouse Locator" }}
        />

        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{ title: "Detail Barang" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
} 