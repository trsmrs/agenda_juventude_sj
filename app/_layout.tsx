import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from 'expo-router/drawer'
import { Ionicons } from "@expo/vector-icons";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{headerShown: true}}>
        <Drawer.Screen
          name="index"
          options={{
            drawerLabel: 'Início',
            title: 'Bem Vindo(a)',
            drawerIcon: () => <Ionicons name="home-outline" size={18} color={"#3A98FF"}/>
          }}
          />
      </Drawer>
    </GestureHandlerRootView>
  );
}




