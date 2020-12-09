import {  
  ADD_ITEM,
  DONE_ADD,
  DONE_TASK,
  DELETE_TASK,
  EDIT_TASK
} from "./constant";

const todoItemGenerator = () => ({
  id: Math.random().toString(16).slice(2),
  text: '',
  isDone: false,
  actionType: 'add'
});

const addItem = () => {
  return {
    type: ADD_ITEM,
    payload: {
      item: todoItemGenerator()
    }
  }
};

const doneAddItem = ( id, text ) => ({
  type: DONE_ADD,
  payload: { 
    id, 
    text,
    actionType: 'display'
  }
});

const doneTaskItem = (id, isDone) => ({
  type: DONE_TASK,
  payload: {
    id,
    isDone
  }
});

const deleteTaskItem = id => ({ 
  type: DELETE_TASK,
  payload: {
    id
  }
 });

const editTaskItem = id => ({
  type: EDIT_TASK,
  payload: {
    id,
    actionType: "edit"
  }
});

export default {
  addItem,
  editTaskItem,
  deleteTaskItem,
  doneTaskItem,
  doneAddItem
} 