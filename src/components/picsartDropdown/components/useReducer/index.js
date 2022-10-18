import allCountriesData from '../../data/countries.js';

export const initialState = {
    isVisible: false,
    countriesData: allCountriesData,
    filteredData: allCountriesData,
    inputValue: '',
}

export const ACTION_TYPE = {
    TOGGLE_DROPDOWN: 'TOGGLE_DROPDOWN',
    FILTERED_DATA: 'FILTERED_DATA',
    FILTERED_DATA_DEFAULT: 'FILTERED_DATA_DEFAULT',
    INPUT_VALUE: 'INPUT_VALUE',
}

export function reducer (state, action) {
    switch(action.type) {
        case ACTION_TYPE.TOGGLE_DROPDOWN : {
            return {...state, isVisible : !state.isVisible};
        }
        case ACTION_TYPE.FILTERED_DATA : {
            return {...state, filteredData: state.countriesData.filter(item => {
                return (item.country.toLowerCase().includes(state.inputValue))
            })}
        }
        case ACTION_TYPE.FILTERED_DATA_DEFAULT : {
            return {...state, filteredData: allCountriesData };
        }
        case ACTION_TYPE.INPUT_VALUE : {
            const {payload: onChangeValue} = action;
            return {...state, inputValue: onChangeValue};
        }
        default: return state
    }
}