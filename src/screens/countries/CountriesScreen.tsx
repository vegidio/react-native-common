import React, { FC } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

export const CountriesScreen: FC = () => {
    return <SafeAreaView style={styles.safeArea} />;
};

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: 'blue',
        flex: 1,
    },
});
