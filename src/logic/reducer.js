import { ADD_ITEM } from './constants';
import { DEL_ITEM } from './constants';
import { COMPLETE_ITEM } from './constants';

let nextId = 3;

export const initialState = {
  items: [
    { id: 1, content: 'Make sure items are completeable', completed:'Incomplete' },
    { id: 2, content: 'Add filters (Use HOC)', completed:'Incomplete' },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_ITEM:
      const newItem = {
        id: nextId++,
        content: action.content,
        completed: 'Incomplete',
      };

      return {
        ...state,
        items: [...state.items, newItem],
      };

    case DEL_ITEM:
      var index = state.items.map(function(x) {return x.id}).indexOf(action.content);
      state.items.splice(index,1);

      return {
        ...state,
        items: [...state.items],
      };
    
    case COMPLETE_ITEM:
      var index2 = state.items.map(function(x) {return x.id}).indexOf(action.content);
      if (state.items[index2].completed === "Complete")
        state.items[index2].completed = "Incomplete";
      else
        state.items[index2].completed = "Complete";

      return {
        ...state,
        items: [...state.items],
      };
    
    default:
      return state;
  }
};

export default reducer;
