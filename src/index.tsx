import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store, {history} from "@redux/store";

import App from './App';
import reportWebVitals from './reportWebVitals';

const isLocal = window.location.host === 'localhost:3000';
const subPath = isLocal ? '' : "/test/react-test-04";

if (!isLocal) {
  document.write("<base href='" + subPath + "/' />");
}

ReactDOM.render(
  <Provider store={store}>
    <App history={history} />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
