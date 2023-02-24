import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Appbar, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Router } from '@src/components';
import { useAuthStore } from '@src/stores';

export const AuthBottomBar = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const token = useAuthStore(state => state.token);

    return (
        <SafeAreaView>
            <Appbar style={styles.appBar}>
                <Button
                    icon={token ? 'lock' : 'lock-open-variant'}
                    mode="text"
                    textColor={token ? 'green' : 'red'}
                    onPress={() => navigation.navigate(Router.Auth)}>
                    {token ? 'Logged in' : 'Logged out'}
                </Button>
            </Appbar>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    appBar: {
        height: 56,
        justifyContent: 'center',
    },
});
