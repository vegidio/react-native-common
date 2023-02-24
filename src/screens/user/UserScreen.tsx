import React, { FC } from 'react';
import { View } from 'react-native';
import { useFetchMe } from '@src/services/countries.rest';
import UserInfo from './UserInfo';

export const UserScreen: FC = () => {
    const { data: user } = useFetchMe();

    return <View>{user && <UserInfo user={user} />}</View>;
};
