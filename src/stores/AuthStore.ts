import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import { Token } from '@src/models';
import { clearCache, config } from '@src/services/fetchers';

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
            delete config.headers.Authorization;
            clearCache();

            set(state => {
                state.token = undefined;
            });
        },
    })),
);
