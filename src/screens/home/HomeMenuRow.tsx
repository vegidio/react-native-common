import React, { FC } from 'react';
import { List } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { MenuOption } from './MenuOption';

interface Props {
    navigation: StackNavigationProp<any>;
    menuOption: MenuOption;
}

export const HomeMenuRow: FC<Props> = ({ navigation, menuOption }) => {
    return (
        <List.Item title={menuOption.title} onPress={() => navigation.push(menuOption.destination)} right={Chevron} />
    );
};

const Chevron = () => <List.Icon icon="chevron-right" />;
