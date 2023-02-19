import React, { FC } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

export const CountryScreen: FC = () => {
    return <SafeAreaView style={styles.safeArea} />;
};

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: 'green',
        flex: 1,
    },
});
