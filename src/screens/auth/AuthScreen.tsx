import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import AuthLoginForm from './AuthLoginForm';
import { useSelector } from 'react-redux';
import { selectToken } from '@src/store/authSlice';

export const AuthScreen = () => {
    const token = useSelector(selectToken);

    return (
        <View>
            <AuthLoginForm />
            <Text>{JSON.stringify(token)}</Text>
        </View>
    );
};
