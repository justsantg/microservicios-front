// redux/actions/userActions.js
import { ADD_USER, REMOVE_USER, FETCH_USERS } from '../types';

// Acción para agregar un usuario
export const addUser  = (user) => ({
    type: ADD_USER,
    payload: user,
});

// Acción para eliminar un usuario
export const removeUser  = (userId) => ({
    type: REMOVE_USER,
    payload: userId,
});

// Acción para obtener usuarios (puede ser asíncrona)
export const fetchUsers = () => {
    return async (dispatch) => {
        const response = await fetch('https://api.example.com/users');
        const data = await response.json();
        dispatch({
            type: FETCH_USERS,
            payload: data,
        });
    };
};