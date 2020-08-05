import React from "react";
import { Provider } from "react-redux";
import reduxPromise from "redux-promise";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "reducers";
import thunk from "redux-thunk";

export default ({ children, initialState = {} }) => {
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(thunk, reduxPromise))
  );
  return <Provider store={store}>{children}</Provider>;
};
