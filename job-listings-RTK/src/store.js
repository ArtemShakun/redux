import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from 'feature/filters/filter-slice';
import { positionReducer } from 'feature/position/position-slice';

export const store = configureStore({
    reducer: {
        filters: filterReducer,
        positions: positionReducer,
    },
    devTools: true,
});
