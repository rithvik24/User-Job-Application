import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux'
import configureStore from "./store/configureStore";
import App from "./App";

const store = configureStore()
console.log('store',store.getState()) 
store.subscribe(() => {
  console.log('store updated',store.getState())
})

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App/>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);