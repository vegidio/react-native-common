import React, { FC } from 'react';
import { TextInput } from 'react-native-paper';
import { Props } from 'react-native-paper/src/components/TextInput/TextInput';

export const MyTextInput: FC<Props> = (props) => {
    return (
        <TextInput
            {...props}
            right={
                props.right ?? (props.value && <TextInput.Icon icon="close" onPress={() => props.onChangeText?.('')} />)
            }
        />
    );
};

MyTextInput.defaultProps = {
    autoCapitalize: 'none',
    autoCorrect: false,
    mode: 'outlined',
};
