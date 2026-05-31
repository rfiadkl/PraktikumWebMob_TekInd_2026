import React from "react";
import { View, Platform } from "react-native";
import { NavigationIndependentTree } from "@react-navigation/native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Import Screens yang sudah kamu pisah di folder screens
import HomeScreen from "../../screens/HomeScreen";
import DetailScreen from "../../screens/DetailScreen";
import TambahScreen from "../../screens/TambahScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: Platform.OS === "android" ? 30 : 0,
      }}
    >
      {/* NavigationIndependentTree wajib dipasang agar tidak bentrok dengan tab bar expo */}
      <NavigationIndependentTree>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              headerStyle: { backgroundColor: "#2c3e50" },
              headerTintColor: "#fff",
              headerTitleStyle: { fontWeight: "bold" },
            }}
          >
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{ title: "Gudang Ind. v1.0" }} // Judul teks murni sesuai modul dosen
            />
            <Stack.Screen
              name="Detail"
              component={DetailScreen}
              options={({ route }: any) => ({
                title: route.params?.itemData?.nama || "Detail",
              })}
            />
            <Stack.Screen
              name="Tambah"
              component={TambahScreen}
              options={{ title: "Tambah Barang" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NavigationIndependentTree>
    </View>
  );
}
