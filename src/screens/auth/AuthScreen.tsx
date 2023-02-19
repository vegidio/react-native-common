import React, { FC } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

export const AuthScreen: FC = () => {
    return <SafeAreaView style={styles.safeArea} />;
};

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: 'red',
        flex: 1,
    },
});
