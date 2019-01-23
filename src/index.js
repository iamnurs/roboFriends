import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { searchRobot, requestRobots } from "./reducers";
import "./styles/index.css";
import App from "./containers/App";
import * as serviceWorker from "./serviceWorker";
import "tachyons";

const reducers = combineReducers({searchRobot, requestRobots});
const logger = createLogger();
const store = createStore(reducers, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
