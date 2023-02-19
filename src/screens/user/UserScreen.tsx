import React, { FC } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

export const UserScreen: FC = () => {
    return <SafeAreaView style={styles.safeArea} />;
};

const styles = StyleSheet.create({
    safeArea: {
        backgroundColor: 'purple',
        flex: 1,
    },
});
