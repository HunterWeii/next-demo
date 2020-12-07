import style from "./styles.module.scss";
import {
  Title,
  Text
} from "components/lib/typography";
import Button from "components/lib/button";
import todoStore from "stores/todos/store";
import { Provider } from "react-redux";

function NoTaskDescription() {
  return (
    <div className={style.NoTask}>
      <Text className={style.NoTask_text}>
        There is no task in the list. Click Add Task to insert data.
      </Text>
    </div>
  )
}

export default function index() {
  return (
    <section className={ style.todos_sections }>
      <main className={ style.todos_sections_main }>
        <div className={style.todos_sections_main_header}>
          <Title level="h5">12 JAN 2020</Title>
          <Title level="h5">Tuesday</Title>
        </div>
        <Provider store={todoStore}>
          <div className={style.todos_sections_main_content}>
            <div className={style.todos_sections_main_row}>
              <Text>Practice Node js</Text>
              <input type="checkbox" />
            </div>
            <div className={style.todos_sections_main_row}>
              <Text>Practice Node js</Text>
              <input type="checkbox" />
            </div>
          </div>
          <Button>Add Task</Button>
        </Provider>
      </main>
    </section>
  )
}