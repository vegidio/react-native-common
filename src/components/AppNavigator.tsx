import React, { FC } from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthScreen, CountriesScreen, CountryScreen, HomeScreen, UserScreen } from '@src/screens';
import { AuthBottomBar } from '@src/components';

const Stack = createStackNavigator();

export enum Router {
    Home = 'Home',
    Auth = 'Auth',
    User = 'User',
    CountryByCode = 'CountryByCode',
    Countries = 'Countries',
}

interface Props {
    theme: Theme;
}

export const AppNavigator: FC<Props> = ({ theme }) => {
    return (
        <NavigationContainer theme={theme}>
            {/* Navigator */}
            <Stack.Navigator initialRouteName={Router.Home}>
                <Stack.Screen name={Router.Auth} component={AuthScreen} />
                <Stack.Screen name={Router.Countries} component={CountriesScreen} />
                <Stack.Screen name={Router.CountryByCode} component={CountryScreen} />
                <Stack.Screen name={Router.Home} component={HomeScreen} />
                <Stack.Screen name={Router.User} component={UserScreen} />
            </Stack.Navigator>

            {/* Auth Button */}
            <AuthBottomBar />
        </NavigationContainer>
    );
};
