// Hint: Import actions.

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
      // Hint: Increment quantity of current action item and filter out all items that aren't current action item.
      action.item.quantity = ???;
      const add = state.items.filter();

      return {
        ...state,
        items: [...add, action.item]
      };
    case REMOVE_ITEM:
      // Hint: Decrement the current quantity and filter out all items that aren't current action item.
      const remove = state.items.filter();

      // Hint: Filter out all items with a quantity of 0 and below.
      return {
        ...state,
        items: [...remove, action.item]
      };
    default:
      return state;
  }
};
