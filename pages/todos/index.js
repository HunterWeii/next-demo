import style from "./styles.module.scss";
import {
  Title,
} from "components/lib/typography";
import TodoForm from "components/pages/todos/TodoForm";
import todoStore from "stores/todos/store";
import { Provider } from "react-redux";

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
            <TodoForm />
          </div>
        </Provider>
      </main>
    </section>
  )
}