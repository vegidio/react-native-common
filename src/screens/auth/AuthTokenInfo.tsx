import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { logoutAndClearCache, store } from '@src/store';
import { Token } from '@src/models';
import { CardRow } from '@src/components';

interface AuthTokenInfoProps {
    token: Token;
}

const AuthTokenInfo: FC<AuthTokenInfoProps> = ({ token }) => {
    return (
        <Card style={styles.card}>
            <Card.Title title="Tokens" />
            <Card.Content style={styles.cardContent}>
                <CardRow title="Access:" value={token.accessToken} />
                <CardRow title="Refresh:" value={token.refreshToken} />
            </Card.Content>
            <Card.Actions style={styles.cardActions}>
                <Button mode="contained" onPress={() => store.dispatch(logoutAndClearCache())}>
                    Logout
                </Button>
            </Card.Actions>
        </Card>
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
});

export default AuthTokenInfo;
