import axios from 'axios';
import * as api from './config';
import { configureStore } from '@reduxjs/toolkit';
import { themeReducer } from './feature/theme/theme-slice';
import { controlsReducer } from './feature/controls/controls-slice';
import { countryReducer } from './feature/countries/countries-slice';
import { detailsReducer } from './feature/details/details-slice';

export const store = configureStore({
    reducer: {
        theme: themeReducer,
        controls: controlsReducer,
        countries: countryReducer,
        details: detailsReducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    client: axios,
                    api,
                },
            },
            serializableCheck: false,
        }),
});
