import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import React from 'react';
import Ionicons from '@expo/vector-icons/Ionicons';
import MapComponent from '../components/MapComponent';
import { colors, parameters } from '../global/styles';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

const DestinationScreen = ({navigation}) => {
  return (
    <>
        <View style={styles.container}>
            {/* <TouchableOpacity onPress={()=> {navigation.navigate("RequestScreen")}}> */}
                <View style={styles.view1}>
                    <Ionicons
                        type="material-community"
                        name="arrow-back"
                        color={colors.grey1}
                        size={32}
                        onPress={() => navigation.goBack()}
                    />
                </View>
            {/* </TouchableOpacity> */}
            <MapComponent />
        </View>
    </>
  );
};

export default DestinationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        justifyContent: 'center',
        paddingTop: parameters.statusBarHeight
    },

    view1: {
        position: "absolute",
        top: 25,
        left: 12,
        backgroundColor: colors.white,
        height: 40,
        width: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 2, 
        zIndex: 8
    }
});