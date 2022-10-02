import { StyleSheet, Text, View, Dimensions, TouchableOpacity, SafeAreaView } from 'react-native';
import React, { useState, useContext, useRef} from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from '@expo/vector-icons/Ionicons';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { colors, parameters } from '../global/styles';

import { OriginContext, DestinationContext } from '../contexts/Contexts';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const SCREEN_WIDTH = Dimensions.get('window').width;

//navigator.geolocation = require('react-native-geolocation-service');

export default function DestinationScreen({navigation}) {
const {dispatchOrigin} = useContext(OriginContext);
//const {dispatchDestination} = useContext(DestinationContext);

const textInput1 = useRef(4);
const textInput2 = useRef(5);

const[destination, setDestination] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.view1}>
            <Ionicons
                type="material-community"
                name="arrow-back"
                color={colors.grey1}
                size={32}
                onPress={() => navigation.goBack()}
            />
        </View>
        <View style={styles.view2}>
            <TouchableOpacity>
                    {/* <View style ={{top: 25, alignItems: "center"}}> */}
                        <View style ={styles.view3}>
                            {/* <Avatar 
                                rounded
                                avatarStyle ={{}}
                                size ={30}
                                source = {require('../../assets/blankProfilePic.jpg')}
                                /> */}
                            <Text style ={{marginLeft: 5}}> For Someone </Text>
                            <Ionicons 
                                type="material-community"
                                name="chevron-down"
                                color={colors.grey1}
                                size={26}
                            />
                        </View>
                    {/* </View> */}
                </TouchableOpacity>
            </View>
            <GooglePlacesAutocomplete 
                nearbyPlacesAPI = 'GooglePlacesSearch'
                placeholder ="From..."
                listViewDisplayed = "auto"
                debounce ={400}
                currentLocation ={true}
                currentLocationLabel='Current location'
                ref ={textInput1}
                minLength ={2}
                enablePoweredByContainer = {false}
                fetchDetails ={true}
                autoFocus ={true}
                styles = {autoComplete}
                query ={{
                    key:GOOGLE_MAPS_APIKEY,
                    language:"en",
                    components: 'country:bd'
                }}

                onPress= {(data, details = null)=>{
                    dispatchOrigin({type:"ADD_ORIGIN", payload:{
                        latitude:details.geometry.location.lat,
                        longitude:details.geometry.location.lng,
                        address:details.formatted_address,
                        name:details.name
                    }})

                    navigation.goBack();

                    // setDestination(true)
                }}
            />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: parameters.statusBarHeight
    },

    view1: {
        position: "absolute",
        top: 46,
        left: 10,
        backgroundColor: colors.white,
        height: 40,
        width: 40,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 2, 
        zIndex: 8
    },
    
      view2: {
        height: SCREEN_HEIGHT * 0.05,
        alignItems: "center",
        zIndex: 5,
        backgroundColor:colors.white
    },
      
      view3: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 2,   
        marginBottom: 10,
        backgroundColor: colors.white,
        //height:30,
        zIndex: 10
    }
});

const autoComplete = {
    
    textInput:{
        backgroundColor: colors.grey6,
        height: 50,
        borderRadius: 5,
        paddingVertical: 5,
        paddingHorizontal: 10,
        fontSize: 15,
        flex: 1,
        borderWidth:1,
        marginHorizontal:15,
    },

    container: {
        paddingTop:20,
        flex: 1,
        backgroundColor:colors.white
    },
  
    textInputContainer: {
        flexDirection: 'row',
    }
}