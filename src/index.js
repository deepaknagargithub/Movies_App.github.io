import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore } from 'redux';
import './index.css';
import App from './components/App';
import movies from './reducers';
const store = createStore(movies);


// store.dispatch({
//   type: "Add_Movies",
//   movies: [{ name: 'superman' }]
// })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App store ={store} />
  </React.StrictMode>
);



