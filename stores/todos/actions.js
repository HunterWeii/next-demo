import {  
  ADD_ITEM,
  DONE_ADD
} from "./constant";

const todoItemGenerator = () => ({
  id: Math.random().toString(16).slice(2),
  text: '',
  isDone: false,
  actionType: 'add'
});

export const addItem = () => {
  return {
    type: ADD_ITEM,
    payload: {
      item: todoItemGenerator()
    }
  }
};

export const doneAddItem = ( id, text ) => ({
  type: DONE_ADD,
  payload: { 
    id, 
    text 
  }
});

