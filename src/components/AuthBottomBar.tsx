import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Appbar, Button } from 'react-native-paper';
import { Router } from '@src/components';

export const AuthBottomBar = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();

    return (
        <SafeAreaView>
            <Appbar style={styles.appBar}>
                <Button
                    icon="lock-open-variant"
                    mode="text"
                    textColor="red"
                    onPress={() => navigation.navigate(Router.Auth)}>
                    Logged out
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
