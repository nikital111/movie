import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from "./config/reducer.js";

import './index.css';
import App from './App/App';

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, document.getElementById('root'));
