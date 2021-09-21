import {createStore} from "redux";
const SET_USERNAME = 'SET_USERNAME';
const initialState = {profile: {
    username: '',
        checkbox: false
    }};

const SET_CHECKBOX = 'SET_CHECKBOX';

const reducer = (state={}, action) => {
    switch (action.type) {
    case SET_USERNAME:
        const newState = {...state}
            newState.profile.username = action.payload
            return newState;
        case SET_CHECKBOX:
            const newState1 = {...state}
            newState1.profile.checkbox = action.payload
            return newState1;
        default: return state;

    }
};

export const setUsername = (username) => {
    return {type: SET_USERNAME, payload: username}
}
export const setCheckbox = (checkbox) => {
    return {type: SET_CHECKBOX, payload: checkbox}
}
const store = createStore(reducer, initialState);
export default store;