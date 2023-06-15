import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadCountries } from './countries-slice';

import {
    selectVisibleCountries,
    selectAllCountriesInfo,
} from './countries-slice';
import { selectControls } from '../controls/controls-slice';

export const useCountries = () => {
    const dispatch = useDispatch();
    const { search, region } = useSelector(selectControls);
    const { status, error, qty } = useSelector(selectAllCountriesInfo);
    const countries = useSelector((state) =>
        selectVisibleCountries(state, { search, region })
    );

    useEffect(() => {
        if (!qty) {
            dispatch(loadCountries());
        }
    }, [qty, dispatch]);

    return [status, error, countries];
};
