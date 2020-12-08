import {
  ADD_ITEM,
  DONE_ADD
} from "./constant";

const initState = [];

export default function TodoReducers( state = initState, action ) {
  const { type, payload = {} } = action;
  switch(type) {
    case ADD_ITEM:
      const { item } = payload;
      const newState = [
        ...state,
        item
      ];

      return newState;
      break;
    
    case DONE_ADD:
      const { id, text } = payload;
      const itemIndex = state.findIndex(item => item.id === id);
      const newItem = { ...state[itemIndex], text, actionType: 'display' }  
      const copyState = [ ...state ];

      copyState.splice(itemIndex, 1, newItem);

      return copyState;
      break;

    default: 
      return state;
  }
}