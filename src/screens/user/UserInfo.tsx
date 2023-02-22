import React, { FC } from 'react';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import { User } from '@src/models';
import { CardRow } from '@src/components';

interface UserInfoProps {
    user: User;
}

const UserInfo: FC<UserInfoProps> = ({ user }) => {
    return (
        <Card style={styles.card}>
            <Card.Title title="User" />
            <Card.Content style={styles.cardContent}>
                <CardRow title="ID:" value={String(user.id)} />
                <CardRow title="Name:" value={user.name} />
                <CardRow title="Username:" value={user.username} />
                <CardRow title="E-mail:" value={user.email} />
            </Card.Content>
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

export default UserInfo;
