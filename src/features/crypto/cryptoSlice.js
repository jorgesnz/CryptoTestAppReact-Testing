import {createSlice} from '@reduxjs/toolkit';

import {CRYPTO_CURRENCIES} from '@constants/currencies';

const initialState = {
    data: CRYPTO_CURRENCIES,
    sortDirection: ''
}

export const cryptoSlice = createSlice({
    name: 'crypto',
    initialState,
    reducers: {
        toggleFavorite: (state, action) => {
            const {payload} = action;
            const {data} = state;
            const cryptoCurrency = data.find((item) => item.value === payload.value);
            if (cryptoCurrency) {
                cryptoCurrency.isFavorite = !cryptoCurrency.isFavorite;
            }
        },
        handleSort: (state, action) => {
            const {payload} = action;
            const {data, sortDirection} = state;
            const {type, variant} = payload;
            const array = variant === 'short' ? data.slice(0, 5) : data;
            const field = () => {
                switch (type) {
                    case 'change':
                        return 'change';
                    case 'price':
                        return 'usd';
                    default:
                        return 'name';
                }
            }

            if (sortDirection === 'asc') {
                array.sort((a, b) => a[field()] > b[field()] ? 1 : -1);
                state.sortDirection = 'desc';
            } else {
                array.sort((a, b) => a[field()] < b[field()] ? 1 : -1);
                state.sortDirection = 'asc';
            }
        }
    }
});

export const {toggleFavorite, handleSort} = cryptoSlice.actions;

export default cryptoSlice.reducer;