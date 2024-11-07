// redux/actions/productActions.js
import { ADD_PRODUCT, REMOVE_PRODUCT, FETCH_PRODUCTS } from '../types';

// Acción para agregar un producto
export const addProduct = (product) => ({
    type: ADD_PRODUCT,
    payload: product,
});

// Acción para eliminar un producto
export const removeProduct = (productId) => ({
    type: REMOVE_PRODUCT,
    payload: productId,
});

// Acción para obtener productos (puede ser asíncrona)
export const fetchProducts = () => {
    return async (dispatch) => {
        const response = await fetch('https://api.example.com/products');
        const data = await response.json();
        dispatch({
            type: FETCH_PRODUCTS,
            payload: data,
        });
    };
};