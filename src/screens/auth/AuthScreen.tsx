import React from 'react';
import { View } from 'react-native';
import { Divider } from 'react-native-paper';
import AuthLoginForm from './AuthLoginForm';
import AuthTokenInfo from './AuthTokenInfo';
import { useAuthStore } from '@src/stores';

export const AuthScreen = () => {
    const token = useAuthStore(state => state.token);

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
