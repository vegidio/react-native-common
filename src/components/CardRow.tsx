import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';

interface CardRowProps {
    title: string;
    value: string;
}

export const CardRow: FC<CardRowProps> = ({ title, value }) => {
    return (
        <View style={styles.cardRow}>
            <Text style={styles.titleText}>{title}</Text>
            <Text numberOfLines={3} ellipsizeMode="middle" style={styles.tokenText}>
                {value}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    cardRow: {
        flexDirection: 'row',
        gap: 8,
    },
    titleText: {
        fontWeight: 'bold',
    },
    tokenText: {
        flexShrink: 1,
    },
});
