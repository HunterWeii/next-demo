import style from "./TodoForm.module.scss";
import { Text } from "components/lib/typography";

export default function NoTaskDisplay() {
  return (
    <div className={style.NoTask}>
      <Text className={style.NoTask_text}>
        There is no task in the list. Click Add Task to insert data.
      </Text>
    </div>
  )
}