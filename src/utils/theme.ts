import { Appearance } from 'react-native';
import { DarkTheme as NavigationDarkTheme, DefaultTheme as NavigationLightTheme } from '@react-navigation/native';
import { adaptNavigationTheme, MD3DarkTheme, MD3LightTheme } from 'react-native-paper';

const { LightTheme: AdaptedLightTheme, DarkTheme: AdaptedDarkTheme } = adaptNavigationTheme({
    reactNavigationLight: NavigationLightTheme,
    reactNavigationDark: NavigationDarkTheme,
});

export const LightTheme = {
    ...MD3LightTheme,
    ...AdaptedLightTheme,
    colors: {
        ...MD3LightTheme.colors,
        ...AdaptedLightTheme.colors,
    },
};

export const DarkTheme = {
    ...MD3DarkTheme,
    ...AdaptedDarkTheme,
    colors: {
        ...MD3DarkTheme.colors,
        ...AdaptedDarkTheme.colors,
    },
};

export const isDarkTheme = Appearance.getColorScheme() === 'dark';
