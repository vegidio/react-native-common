import React, { FC } from 'react';
import { FlatList } from 'react-native';
import { Divider } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { Router } from '@src/components';
import { HomeMenuRow } from './HomeMenuRow';
import { MenuOption } from './MenuOption';

export const HomeScreen: FC = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();

    const menuOptions: MenuOption[] = [
        { title: 'Me', destination: Router.User },
        { title: 'Country By Code', destination: Router.CountryByCode },
        { title: 'Countries', destination: Router.Countries },
    ];

    return (
        <FlatList<MenuOption>
            data={menuOptions}
            ItemSeparatorComponent={Divider}
            keyExtractor={(option) => option.destination}
            renderItem={(list) => <HomeMenuRow navigation={navigation} menuOption={list.item} />}
        />
    );
};
