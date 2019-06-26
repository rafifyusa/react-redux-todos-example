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

const configureStore = () => {
  const persistedState = loadState();

  const store = createStore(todoApp, persistedState); //second argument will overwrite the initial state

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
