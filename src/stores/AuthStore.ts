import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { Token } from '@src/models';
import { client } from 'rn-sak';

interface AuthStore {
    token?: Token;
    setToken: (token: Token) => void;
    logout: () => void;
}

export const useAuthStore = create(
    immer<AuthStore>(set => ({
        setToken(token: Token) {
            set(state => {
                state.token = token;
            });
        },

        logout() {
            delete client.headers.Authorization;
            client.clearCache();

            set(state => {
                state.token = undefined;
            });
        },
    })),
);
