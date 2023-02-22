import React from 'react';
import { useSelector } from 'react-redux';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Appbar, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Router } from '@src/components';
import { selectToken } from '@src/store/slices';

export const AuthBottomBar = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const token = useSelector(selectToken);

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
