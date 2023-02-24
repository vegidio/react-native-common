import 'react-native-gesture-handler';
import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { AppNavigator } from '@src/components';
import { DarkTheme, isDarkTheme, LightTheme } from '@src/utils';

const App = () => {
    let theme = isDarkTheme ? DarkTheme : LightTheme;

    return (
        <PaperProvider theme={theme}>
            <AppNavigator theme={theme} />
        </PaperProvider>
    );
};

export default App;
