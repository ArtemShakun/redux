import { SET_COUNTRIES, SET_ERROR, SET_LADING } from './countries-actions';

const initialState = {
    status: 'idle', // lading, received, rejected
    error: null,
    list: [],
};

export const countriesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_COUNTRIES:
            return {
                ...state,
                status: 'received',
                list: payload,
            };
        case SET_LADING:
            return {
                ...state,
                status: 'loading',
                error: null,
            };

        case SET_ERROR:
            return {
                ...state,
                status: 'rejected',
                error: payload,
            };
        default:
            return state;
    }
};
