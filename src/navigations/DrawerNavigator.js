import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeStack } from './StackNavigators';
import Ionicons from '@expo/vector-icons/Ionicons';
import { colors } from '../global/styles';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator(){
    return(
        <Drawer.Navigator useLegacyImplementation={true} initialRouteName="Home">
            <Drawer.Screen
                name="HomeStack"
                component={HomeStack}
                options={{
                    title:"Home",
                    drawerIcon: ({focussed, size}) => <Ionicons 
                                                            type="material-community"
                                                            name="home"
                                                            color={focussed? '#7cc' : colors.grey2}
                                                            size={size}
                                                        />,
                    headerShown: false
                }}
            />
        </Drawer.Navigator>
    )
};