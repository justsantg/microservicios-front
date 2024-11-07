// redux/reducers/index.js
import { combineReducers } from 'redux';
import userReducer from './userReducer';
import productReducer from './productReducer';

// Combina los reductores
const rootReducer = combineReducers({
    user: userReducer,
    product: productReducer,
});

export default rootReducer;