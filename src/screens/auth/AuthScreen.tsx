import React from 'react';
import { View } from 'react-native';
import { useSelector } from 'react-redux';
import { Divider } from 'react-native-paper';
import { selectToken } from '@src/store/slices';
import AuthLoginForm from './AuthLoginForm';
import AuthTokenInfo from './AuthTokenInfo';

export const AuthScreen = () => {
    const token = useSelector(selectToken);

    return (
        <View>
            <AuthLoginForm />

            {token && (
                <>
                    <Divider />
                    <AuthTokenInfo token={token} />
                </>
            )}
        </View>
    );
};
