import React, { FC } from 'react';
import { TextInput } from 'react-native-paper';
import { Props } from 'react-native-paper/src/components/TextInput/TextInput';

export const PasswordInput: FC<Props> = (props) => {
    return (
        <TextInput
            {...props}
            right={
                props.right ?? (props.value && <TextInput.Icon icon="close" onPress={() => props.onChangeText?.('')} />)
            }
        />
    );
};

PasswordInput.defaultProps = {
    mode: 'outlined',
    secureTextEntry: true,
};
