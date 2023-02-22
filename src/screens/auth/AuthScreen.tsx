import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { Text } from 'react-native-paper';
import { selectToken } from '@src/store/slices/authSlice';
import AuthLoginForm from './AuthLoginForm';

export const AuthScreen = () => {
    const token = useSelector(selectToken);

    return (
        <View>
            <AuthLoginForm />
            <Text>{JSON.stringify(token)}</Text>
        </View>
    );
};
