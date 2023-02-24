import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { mutate } from 'swr';
import { Token } from '@src/models';
import { config } from '@src/services/fetchers';

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
            delete config.headers.Authorization; // Remove the Authorization header
            mutate(() => true, undefined, { revalidate: false }); // Clear the cache

            set(state => {
                state.token = undefined;
            });
        },
    })),
);
