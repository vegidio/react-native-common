import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthScreen, CountriesScreen, CountryScreen, HomeScreen, UserScreen } from '@src/screens';

const Stack = createStackNavigator();

export enum Router {
    Home = 'Home',
    Auth = 'Auth',
    User = 'User',
    CountryByCode = 'CountryByCode',
    Countries = 'Countries',
}

export const AppNavigator: FC = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={Router.Home}>
                <Stack.Screen name={Router.Auth} component={AuthScreen} />
                <Stack.Screen name={Router.Countries} component={CountriesScreen} />
                <Stack.Screen name={Router.CountryByCode} component={CountryScreen} />
                <Stack.Screen name={Router.Home} component={HomeScreen} />
                <Stack.Screen name={Router.User} component={UserScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
