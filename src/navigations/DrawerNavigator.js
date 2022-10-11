import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeStack } from "./StackNavigators";
import Ionicons from "@expo/vector-icons/Ionicons";
import { colors } from "../global/styles";

import ProfileScreen from "../screens/ProfileScreen";
import SettingsScreen from "../screens/SettingsScreen";
import LegalScreen from "../screens/LegalScreen";

const Drawer = createDrawerNavigator();

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}

function Settings() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}

function Legal() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Notifications Screen</Text>
    </View>
  );
}

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator useLegacyImplementation={true} initialRouteName="Home">
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          title: "Home",
          drawerIcon: ({ focussed, size }) => (
            <Ionicons
              type="material-community"
              name="home"
              color={focussed ? "#7cc" : colors.grey2}
              size={size}
            />
          ),
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          title: "Settings",
          drawerIcon: ({ focussed, size }) => (
            <Ionicons
              type="material-community"
              name="settings-outline"
              color={focussed ? "#7cc" : colors.grey2}
              size={size}
            />
          ),
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "Profile",
          drawerIcon: ({ focussed, size }) => (
            <Ionicons
              type="material-community"
              name="person-circle-outline"
              color={focussed ? "#7cc" : colors.grey2}
              size={size}
            />
          ),
          headerShown: false,
        }}
      />
      <Drawer.Screen
        name="Legal"
        component={LegalScreen}
        options={{
          title: "Legal",
          drawerIcon: ({ focussed, size }) => (
            <Ionicons
              type="material-community"
              name="information-outline"
              color={focussed ? "#7cc" : colors.grey2}
              size={size}
            />
          ),
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
}
