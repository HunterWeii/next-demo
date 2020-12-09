import style from "./TodoForm.module.scss";
import { Text } from "components/lib/typography";
import { useState } from 'react';
import Dropdown from "components/lib/dropdown";
import Button from "components/lib/button";

export default function DisplayTask(props) {
  const {
    isDone,
    text,
    onDoneTask,
    onDeleteItem,
    onEditTask
  } = props;

  const handleChange = event => {
    const status = (event.target.checked);
    setDone(status)
    onDoneTask(status);
  };

  const [done, setDone] = useState(false);

  return (
    <div className={style.todoForm_row}>
      <div className={ style.todoForm_flex }>
        <Dropdown>
          <Button buttonType="default" onClick={ onEditTask }>Edit</Button>
          <Button buttonType="default" onClick={ onDeleteItem }>Delete</Button>
        </Dropdown>
        <Text className={ style.todoForm_text } deleted={isDone}>{ text }</Text>
      </div>
      <input type="checkbox" checked={done} onChange={handleChange} />
    </div>
  )
}