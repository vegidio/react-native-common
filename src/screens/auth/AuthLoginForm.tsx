import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { EmailInput, PasswordInput } from 'rn-sak';
import { useLogin } from '@src/services/countries.graphql';

const AuthLoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { trigger } = useLogin();

    return (
        <Card style={styles.card}>
            <Card.Title title="Credentials" />
            <Card.Content style={styles.cardContent}>
                <EmailInput label="E-mail" value={email} onChangeText={text => setEmail(text)} />
                <PasswordInput label="Password" value={password} onChangeText={text => setPassword(text)} />
            </Card.Content>
            <Card.Actions style={styles.cardActions}>
                <Button
                    mode="contained"
                    disabled={email.length === 0 || password.length === 0}
                    onPress={() => trigger({ dto: { email, password } } as any)}>
                    Login
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

export default AuthLoginForm;
