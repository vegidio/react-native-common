import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { Provider as PaperProvider } from 'react-native-paper';
import { AppNavigator } from '@src/components';
import { DarkTheme, isDarkTheme, LightTheme } from '@src/utils';
import { store } from '@src/store';

const App = () => {
    let theme = isDarkTheme ? DarkTheme : LightTheme;

    return (
        <Provider store={store}>
            <PaperProvider theme={theme}>
                <AppNavigator theme={theme} />
            </PaperProvider>
        </Provider>
    );
};

export default App;
