import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import RoootNavigator from './src/navigations/RootNavigator';

export default function App() {
  return (
    <RoootNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
