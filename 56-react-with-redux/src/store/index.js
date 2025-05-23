// step - 3
import { createStore } from "redux";

const INITIAL_VALUE = {
  counter: 0,
  privacy: false,
};
// method redicer
const counterReducer = (store = INITIAL_VALUE, action) => {
  if (action.type === "INCREMENT") {
    return { counter: store.counter + 1 };
  } else if (action.type === "DECREMENT") {
    return { counter: store.counter - 1 };
  } else if (action.type === "ADD") {
    return { counter: store.counter + Number(action.payload.num) };
  } else if (action.type === "SUBTRACT") {
    return { counter: store.counter - Number(action.payload.num) };
  } else if (action.type === "PRIVACY") {
    return { privacy: !store.privacy };
  }

  return store;
};

const counterStore = createStore(counterReducer);

export default counterStore;
