// redux/reducers/userReducer.js
import { ADD_USER, REMOVE_USER, FETCH_USERS } from '../types';

const initialState = {
    users: [],
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, action.payload],
            };
        case REMOVE_USER:
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload),
            };
        case FETCH_USERS:
            return {
                ...state,
                users: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;