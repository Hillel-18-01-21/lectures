import { AUTH_TOKEN_KEY } from '../utils';
import { AUTH_UPDATE, SET_USER } from './actions';

const initState = {
    isLoggedIn: !!localStorage.getItem(AUTH_TOKEN_KEY),
};

const reducer = (state = initState, action) => {
    // if (action.type == AUTH_UPDATE) {
    //     localStorage.removeItem(AUTH_TOKEN_KEY);
    //     return {
    //         ...state,
    //         isLoggedIn: !!action.payload
    //     };
    // } else if (action.type == SET_USER) {
    //     return {
    //         ...state,
    //         user: { ...action.payload }
    //     };
    // }
    switch (action.type) {
        case AUTH_UPDATE: {
            localStorage.removeItem(AUTH_TOKEN_KEY);
            return {
                ...state,
                isLoggedIn: !!action.payload
            };
        }
        case SET_USER:
            return {
                ...state,
                user: { ...action.payload }
            };
    }
    return state;
};

export default reducer;