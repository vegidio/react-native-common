import React, { FC } from 'react';
import { StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { Button, Card, Text } from 'react-native-paper';
import { logout } from '@src/store/slices';
import { Token } from '@src/models';

interface AuthTokenInfoProps {
    token: Token;
}

const AuthTokenInfo: FC<AuthTokenInfoProps> = ({ token }) => {
    const dispatch = useDispatch();

    return (
        <Card style={styles.card}>
            <Card.Title title="Tokens" />
            <Card.Content style={styles.cardContent}>
                <CardRow title="Access:" value={token.accessToken} />
                <CardRow title="Refresh:" value={token.refreshToken} />
            </Card.Content>
            <Card.Actions style={styles.cardActions}>
                <Button mode="contained" onPress={() => dispatch(logout())}>
                    Logout
                </Button>
            </Card.Actions>
        </Card>
    );
};

interface CardRowProps {
    title: string;
    value: string;
}

const CardRow: FC<CardRowProps> = ({ title, value }) => {
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
    card: {
        margin: 16,
    },
    cardContent: {
        gap: 8,
    },
    cardActions: {
        marginTop: 8,
        marginRight: 8,
        marginBottom: 4,
    },
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

export default AuthTokenInfo;
