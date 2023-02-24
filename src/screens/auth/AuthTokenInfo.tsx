import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { Token } from '@src/models';
import { CardRow } from '@src/components';
import { useAuthStore } from '@src/stores';

interface Props {
    token: Token;
}

const AuthTokenInfo: FC<Props> = ({ token }) => {
    const logout = useAuthStore(state => state.logout);

    return (
        <Card style={styles.card}>
            <Card.Title title="Tokens" />
            <Card.Content style={styles.cardContent}>
                <CardRow title="Access:" value={token.accessToken} />
                <CardRow title="Refresh:" value={token.refreshToken} />
            </Card.Content>
            <Card.Actions style={styles.cardActions}>
                <Button mode="contained" onPress={() => logout()}>
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
