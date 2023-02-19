import React, { FC } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

export const HomeScreen: FC = () => {
    return <SafeAreaView style={styles.safeArea} />;
};

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: 'yellow',
        flex: 1,
    },
});
