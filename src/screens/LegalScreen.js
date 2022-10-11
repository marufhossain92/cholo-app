import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../global/styles";

const LegalScreen = (navigation) => {
  return (
    <SafeAreaView>
      <View>
        <Ionicons
          type="material-community"
          name="close-outline"
          color={colors.grey1}
          size={35}
          onPress={() => navigation.goBack()}
        />
      </View>
      <View>
        <Text>Legal Screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default LegalScreen;

const styles = StyleSheet.create({
  view1: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    fontSize: "25",
  },
});
