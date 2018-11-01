import { ADD_ITEM, REMOVE_ITEM } from '../actions';

const INITIAL_STATE = {
  data: [
    {
      product: 'Test 1',
      quantity: 0
    },
    {
      product: 'Test 2',
      quantity: 0
    },
    {
      product: 'Test 3',
      quantity: 0
    },
    {
      product: 'Test 4',
      quantity: 0
    },
    {
      product: 'Test 5',
      quantity: 0
    }
  ],
  items: []
};

export const configuration = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      action.item.quantity = action.item.quantity + 1;
      const add = state.items.filter(
        item => item.product !== action.item.product
      );

      return {
        ...state,
        items: [...add, action.item]
      };
    case REMOVE_ITEM:
      action.item.quantity = action.item.quantity - 1;
      const remove = state.items.filter(
        item => item.product !== action.item.product
      );

      return {
        ...state,
        items: [...remove, action.item].filter(item => item.quantity > 0)
      };
    default:
      return state;
  }
};
