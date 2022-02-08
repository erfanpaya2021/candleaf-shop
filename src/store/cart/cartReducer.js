import { ADD_ITEM, REMOVE_ITEM, FULLY_REMOVE_ITEM } from "./cartTypes";

const initialState = {
  items: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const cartReducer = (state = initialState, action) => {
  let selectedItem,
    selectedItemIndex,
    updatedItem,
    updatedItems,
    total,
    quantity;

  switch (action.type) {
    case ADD_ITEM:
      selectedItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );
      selectedItem = state.items[selectedItemIndex];

      updatedItems = [...state.items];

      if (!selectedItem) {
        updatedItem = { ...action.payload };
        updatedItems.push(updatedItem);
      } else {
        updatedItem = {
          ...selectedItem,
          quantity: selectedItem.quantity + 1,
          totalPrice: selectedItem.totalPrice + selectedItem.price,
        };
        updatedItems[selectedItemIndex] = updatedItem;
      }

      total = updatedItems.reduce((t, c) => t + c.totalPrice, 0);
      quantity = updatedItems.reduce((t, c) => t + c.quantity, 0);

      return {
        items: updatedItems,
        totalAmount: total,
        totalQuantity: quantity,
      };
    case REMOVE_ITEM:
      selectedItemIndex = state.items.findIndex(
        (item) => item.id === action.payload,
      );
      selectedItem = state.items[selectedItemIndex];

      updatedItems = [...state.items];

      if (selectedItem.quantity === 1) {
        updatedItems = updatedItems.filter(
          (item) => item.id !== action.payload,
        );
      } else {
        updatedItem = {
          ...selectedItem,
          quantity: selectedItem.quantity - 1,
          totalPrice: selectedItem.totalPrice - selectedItem.price,
        };

        updatedItems[selectedItemIndex] = updatedItem;
      }

      total = updatedItems.reduce((t, c) => t + c.totalPrice, 0);
      quantity = updatedItems.reduce((t, c) => t + c.quantity, 0);

      return {
        items: updatedItems,
        totalAmount: total,
        totalQuantity: quantity,
      };
    case FULLY_REMOVE_ITEM:
      updatedItems = [...state.items];
      updatedItems = updatedItems.filter((item) => item.id !== action.payload);

      total = updatedItems.reduce((t, c) => t + c.totalPrice, 0);
      quantity = updatedItems.reduce((t, c) => t + c.quantity, 0);

      return {
        items: updatedItems,
        totalAmount: total,
        totalQuantity: quantity,
      };
    default:
      return state;
  }
};

export default cartReducer;
