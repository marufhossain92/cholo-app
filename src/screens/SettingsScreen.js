import { StyleSheet, Text, View } from "react-native";
import React from "react";

const SettingsScreen = () => {
  return (
    <View style={styles.view1}>
      <Text>Settings Screen</Text>
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
