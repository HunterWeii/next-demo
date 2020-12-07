import {
  ADD_ITEM
} from "./constant";
const initState = [];

const generateItem = () => ({
  
});


export default function TodoReducers( state = initState, action ) {
  const { type, payload } = action;
  
  switch(type) {
    case Add_ITEM:
      // do something with payload and state
      return state;
      break

    default: return state;
  }
}