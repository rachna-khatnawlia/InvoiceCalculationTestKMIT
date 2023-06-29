import { configureStore } from "@reduxjs/toolkit";
import auth from "./reducers/authreducers";

import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
const middleware = [thunk];

export const store = configureStore(
  {
    reducer: { auth },
  },
  applyMiddleware(...middleware)
);
