import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import { createLogger } from "redux-logger";

import todoApp from "../reducers/index";

// const logger = store => next => {
//   if (!console.group) {
//     return next;
//   }
//   return action => {
//     console.group(action.type);
//     console.log("%c prev state", "color:gray", store.getState());
//     console.log("%c action", "color: blue", action);
//     const returnValue = next(action);
//     console.log("%c next state", "color: green", store.getState());
//     console.groupEnd(action.type);
//   };
// };

// const promiseMiddleware = store => next => action => {
//   if (typeof action.then === "function") {
//     return action.then(next);
//   }
//   return next(action);
// };

const configureStore = () => {
  const middlewares = [promise];

  if (process.env.NODE_ENV !== "production") {
    middlewares.push(createLogger());
  }

  return createStore(todoApp, applyMiddleware(...middlewares));
};

export default configureStore;
