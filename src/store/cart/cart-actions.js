import { ADD_ITEM, REMOVE_ITEM, FULLY_REMOVE_ITEM } from "./cart-types";

const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item,
  };
};

const removeItem = (id) => {
  return {
    type: REMOVE_ITEM,
    payload: id,
  };
};

const fullyRemoveItem = (id) => {
  return {
    type: FULLY_REMOVE_ITEM,
    payload: id,
  };
};

export { addItem, removeItem, fullyRemoveItem };
