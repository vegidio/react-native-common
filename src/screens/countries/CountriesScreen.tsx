import React, { FC } from 'react';
import { FlatList } from 'react-native';
import { Divider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Country } from '@src/models';
import { useFetchCountries } from '@src/services/countries.graphql';
import { CountryRow } from './CountryRow';

export const CountriesScreen: FC = () => {
    const navigation = useNavigation<StackNavigationProp<any>>();
    const { data: countries } = useFetchCountries();

    return (
        <FlatList<Country>
            data={countries}
            ItemSeparatorComponent={Divider}
            keyExtractor={country => country.code}
            renderItem={list => <CountryRow navigation={navigation} country={list.item} />}
        />
    );
};
