import React from 'react';
import { StyleSheet } from 'react-native';
import { OriginContextProvider, DestinationContextProvider } from './src/contexts/Contexts';
import RoootNavigator from './src/navigations/RootNavigator';

export default function App() {
  return (
    <DestinationContextProvider>
      <OriginContextProvider>
        <RoootNavigator/>
      </OriginContextProvider>
    </DestinationContextProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
