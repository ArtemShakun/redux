export const SET_COUNTRIES = '@@country/SET_COUNTRIES';
export const SET_LADING = '@@country/SET_LADING';
export const SET_ERROR = '@@country/SET_ERROR';

export const setCountries = (countries) => ({
    type: SET_COUNTRIES,
    payload: countries,
});

export const setLading = () => ({
    type: SET_LADING,
});

export const setError = (err) => ({
    type: SET_ERROR,
    payload: err,
});

export const loadCountries =
    () =>
    (dispatch, _, { client, api }) => {
        dispatch(setLading());
        client
            .get(api.ALL_COUNTRIES)
            .then(({ data }) => {
                dispatch(setCountries(data));
            })
            .catch((err) => dispatch(setError(err.message)));
    };
