import style from "./TodoForm.module.scss";
import Button from "components/lib/button";
import { useState } from 'react';

export default function ActionTask(props) {
  const {
    text,
    actionType,
    onDoneAddItem
  } = props;

  const [ inputText, setInputText ] = useState(text);
  const onDone = () => onDoneAddItem(inputText);
  const onHandleChange = event => {
    setInputText(event.target.value);
  };
  const onHandleKeyUp = event => {
    if(event.keyCode === 13) onDone();
  };

  return (
    <div className={style.todoForm_row}>
      <input 
        className={ style.todoForm_input } 
        type="text" 
        value={ inputText }
        onChange={ onHandleChange }
        onKeyUp={ onHandleKeyUp }
      />
      <div>
        <Button className={ style.todoForm_button } onClick={onDone}>
          { actionType === 'add' ? 'Add' : 'Edit' }
        </Button>
        <Button className={ style.todoForm_button } danger>Delete</Button>
      </div>
    </div>
  )
}