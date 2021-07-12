import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { applyMiddleware, createStore } from "redux";
import { counterReducer } from "./store/reducer";
import { Provider } from "react-redux";
import logger from "redux-logger";
/* const myLogger = (store) => {
  return (next) => {
    return (action) => {
      console.log("middleware ran");
      return next(action);
    };
  };
}; */

const myLogger = (store) => (next) => (action) => {
  console.log("middleware ran");
  return next(action);
};

const secondMiddleware = (store) => (next) => (action) => {
  console.log("secondMiddleware ran");
  return next(action);
};

const capAtTen = (store) => (next) => (action) => {
  if (store.getState() >= 10) {
    return next({ type: "DECREMENT" });
  }
  next(action);
};

const store = createStore(
  counterReducer,
  applyMiddleware(myLogger, secondMiddleware, capAtTen, logger)
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
