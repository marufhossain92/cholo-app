import React from 'react';
import { StyleSheet } from 'react-native';
import { OriginContextProvider } from './src/contexts/Contexts';
import RoootNavigator from './src/navigations/RootNavigator';

export default function App() {
  return (
    <OriginContextProvider>
      <RoootNavigator/>
    </OriginContextProvider>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
