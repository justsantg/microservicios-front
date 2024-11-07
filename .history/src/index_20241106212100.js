ascript

Verify

Open In Editor
Edit
Copy code
// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store'; // Asegúrate de que la ruta sea correcta
import App from './App';
import './styles/App.css'; // Si tienes estilos globales

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);