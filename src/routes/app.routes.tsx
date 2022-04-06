import React from 'react';
import { Platform } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack';

import { useTheme } from 'styled-components';
import { Home } from '../screens/Home';
import { Splash } from "../../src/screens/Splash";
import { Most } from "../../src/screens/Most";



const AppRoutes = createBottomTabNavigator();

const AuthRoutes = () => {
    const theme = useTheme();


    return (
        <AppRoutes.Navigator screenOptions={{ headerShown: false }}
        >
            <AppRoutes.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <Entypo
                            name="home"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />
            <AppRoutes.Screen
                name="Cadastrar Feira"
                component={Splash}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialCommunityIcons
                            name="tag-plus-outline"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />


            <AppRoutes.Screen
                name="Mais"
                component={Most}
                options={{
                    tabBarIcon: (({ size, color }) => (
                        <MaterialIcons
                            name="format-list-bulleted"
                            size={size}
                            color={color}
                        />
                    ))
                }}
            />


        </AppRoutes.Navigator>
    )
}

export default AuthRoutes;