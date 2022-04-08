import React from 'react';
import { Text } from 'react-native'
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useTheme } from 'styled-components';
import { Home } from '../screens/Home';
import { RegisterFair } from "../screens/RegisterFair";
import { Most } from "../../src/screens/Most";

const AppRoutes = createBottomTabNavigator();

const AuthRoutes = () => {

    const theme = useTheme();

    return (
        <AppRoutes.Navigator
            screenOptions={{ headerShown: true, headerStyle: { backgroundColor: '#68D391' }, headerTitleAlign: 'center', headerTitleStyle: { color: 'white' } }}

        >
            <AppRoutes.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarLabel: (({ color, focused }) => (
                        <Text style={{ color: focused ? '#68D391' : color, fontSize: 11 }} >Home</Text>
                    )),
                    tabBarIcon: (({ size, color, focused }) => (
                        <Entypo
                            name="home"
                            size={size}
                            color={focused ? '#68D391' : color}
                        />
                    ))
                }}
            />
            <AppRoutes.Screen
                name="Cadastrar Feira"
                component={RegisterFair}
                options={{
                    tabBarLabel: (({ color, focused }) => (
                        <Text style={{ color: focused ? '#68D391' : color, fontSize: 11 }} >Cadastrar Feira</Text>
                    )),
                    tabBarIcon: (({ size, color, focused }) => (
                        <MaterialCommunityIcons
                            name="tag-plus-outline"
                            size={size}
                            color={focused ? '#68D391' : color}
                        />
                    ))
                }}
            />
            <AppRoutes.Screen
                name="Mais"
                component={Most}
                options={{
                    tabBarLabel: (({ color, focused }) => (
                        <Text style={{ color: focused ? '#68D391' : color, fontSize: 11 }} >Mais</Text>
                    )),
                    tabBarIcon: (({ size, color, focused }) => (
                        <MaterialIcons
                            name="format-list-bulleted"
                            size={size}
                            color={focused ? '#68D391' : color}
                        />
                    ))
                }}
            />


        </AppRoutes.Navigator>
    )
}

export default AuthRoutes;