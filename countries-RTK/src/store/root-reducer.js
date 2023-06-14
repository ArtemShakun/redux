import { combineReducers } from 'redux';
import { themeReducer } from './theme/theme-reducer';
import { countriesReducer } from './countries/countries-reducer.ts';
import { controlsReducer } from './controls/controls-reducer';
import { detailsReducer } from './details/details-reducer';

export const rootReducer = combineReducers({
    theme: themeReducer,
    countries: countriesReducer,
    controls: controlsReducer,
    details: detailsReducer,
});
