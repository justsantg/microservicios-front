// redux/reducers/productReducer.js
import { ADD_PRODUCT, REMOVE_PRODUCT, FETCH_PRODUCTS } from '../types';

const initialState = {
    products: [],
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                products: [...state.products, action.payload],
            };
        case REMOVE_PRODUCT:
            return {
                ...state,
                products: state.products.filter(product => product.id !== action.payload),
            };
        case FETCH_PRODUCTS:
            return {
                ...state,
                products: action.payload,
            };
        default:
            return state;
    }
};

export default productReducer;