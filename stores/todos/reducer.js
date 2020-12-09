import {
  ADD_ITEM,
  DONE_ADD,
  DONE_TASK,
  DELETE_TASK,
  EDIT_TASK
} from "./constant";

const initState = [];

export default function TodoReducers( state = initState, action ) {
  const { type, payload = {} } = action;
  const { id } = payload;

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
    case DONE_TASK:
    case EDIT_TASK:
      const itemIndex = state.findIndex(item => item.id === id);
      const newItem = { ...state[itemIndex], ...payload }; 
      const copyState = [ ...state ];

      copyState.splice(itemIndex, 1, newItem);

      return copyState;
      break;

    case DELETE_TASK:
      return state.filter(item => item.id !== id)
      break;
    
    default: 
      return state;
  }
}