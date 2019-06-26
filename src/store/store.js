import { createStore } from "redux";
import throttle from "lodash/throttle";

import todoApp from "../reducers/index";
import { loadState, saveState } from "./localStorage";

// const persistedState = {
//   todos: [
//     {
//       id: "0",
//       text: "Welcome Back!",
//       completed: false
//     }
//   ]
// };

const addLoggingToDispatch = store => {
  const rawDispatch = store.dispatch;

  if (!console.group) {
    return rawDispatch;
  }
  return action => {
    console.group(action.type);
    console.log("%c prev state", "color:gray", store.getState());
    console.log("%c action", "color: blue", action);
    const returnValue = rawDispatch(action);
    console.log("%c next state", "color: green", store.getState());
    console.groupEnd(action.type);
  };
};
const configureStore = () => {
  const persistedState = loadState();

  const store = createStore(todoApp, persistedState); //second argument will overwrite the initial state

  if (process.env.NODE_ENV !== "production") {
    store.dispatch = addLoggingToDispatch(store);
  }
  store.subscribe(
    throttle(() => {
      //saving the todos to localstorage
      saveState({
        todos: store.getState().todos
      });
    }, 1000)
  );
  return store;
};

export default configureStore;
