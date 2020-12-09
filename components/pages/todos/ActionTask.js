import style from "./TodoForm.module.scss";
import Button from "components/lib/button";
import { useState, useEffect, useRef } from 'react';

export default function ActionTask(props) {
  const {
    text,
    actionType,
    onDoneAddItem,
    onDeleteItem
  } = props;
  const inputNode = useRef(null);
  const [ inputText, setInputText ] = useState(text);
  const onDone = () => onDoneAddItem(inputText);
  const onHandleChange = event => setInputText(event.target.value);
  const onHandleKeyUp = event => {
    if(event.keyCode === 13) onDone();
  };

  // auto focus when mount
  useEffect(() => {
    inputNode.current.focus();
  }, []);

  return (
    <div className={style.todoForm_row}>
      <input 
        ref={ inputNode }
        className={ style.todoForm_input } 
        type="text" 
        value={ inputText }
        onChange={ onHandleChange }
        onKeyUp={ onHandleKeyUp }
      />
      <div className={style.todoForm_flex}>
        <Button className={ style.todoForm_button } onClick={onDone}>
          { actionType === 'add' ? 'Add' : 'Edit' }
        </Button>
        <Button className={ style.todoForm_button } danger onClick={onDeleteItem} >Delete</Button>
      </div>
    </div>
  )
}