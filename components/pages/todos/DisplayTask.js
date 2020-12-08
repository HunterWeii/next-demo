import style from "./TodoForm.module.scss";
import { Text } from "components/lib/typography";

export default function DisplayTask(props) {
  const {
    isDone,
    text
  } = props;

  return (
    <div className={style.todoForm_row}>
      <Text>{ text }</Text>
      <input type="checkbox" value={isDone} />
    </div>
  )
}