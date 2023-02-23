import React, { FC } from 'react';
import { List } from 'react-native-paper';
import { StackNavigationProp } from '@react-navigation/stack';
import { Country } from '@src/models';
import { Router } from '@src/components';
import { Image, StyleSheet } from 'react-native';

interface Props {
    navigation: StackNavigationProp<any>;
    country: Country;
}

export const CountryRow: FC<Props> = ({ navigation, country }) => {
    return (
        <List.Item
            title={country.name.common}
            description={country.name.common !== country.name.official ? country.name.official : undefined}
            onPress={() => navigation.push(Router.CountryByCode)}
            left={() => Flag(country)}
            right={() => Chevron()}
        />
    );
};

const Flag = (country: Country) => <Image source={{ uri: country.flags.png }} style={styles.flag} />;

const Chevron = () => <List.Icon icon="chevron-right" />;

const styles = StyleSheet.create({
    flag: {
        aspectRatio: 3 / 2,
        marginLeft: 16,
        resizeMode: 'contain',
        width: 56,
    },
});
