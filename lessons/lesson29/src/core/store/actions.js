import { AUTH_TOKEN_KEY } from '../utils';

const AUTH_UPDATE = 'authUpdate';
const SET_USER = 'setUser';

const createAuthUpdate = payload => ({
    type: AUTH_UPDATE,
    payload: !!payload
});

const getUser = () => {
    return dispatch => {
        return fetch('http://localhost:3000/api/users/me', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem(AUTH_TOKEN_KEY)}`
            }
        })
        .then(e => e.json())
        .then(e => {
            dispatch({
                type: SET_USER,
                payload: e
            });
        });
    };
};

export {
    AUTH_UPDATE,
    SET_USER,
    createAuthUpdate,
    getUser
};