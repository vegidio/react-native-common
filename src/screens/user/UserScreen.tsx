import React, { FC } from 'react';
import { View } from 'react-native';
import { useMeQuery } from '@src/store/api';
import UserInfo from './UserInfo';

export const UserScreen: FC = () => {
    const { data: user } = useMeQuery();

    return <View>{user && <UserInfo user={user} />}</View>;
};
