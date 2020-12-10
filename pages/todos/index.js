import style from "./styles.module.scss";
import {
  Title,
} from "components/lib/typography";
import TodoForm from "components/pages/todos/TodoForm";
import PieChart from "components/pages/todos/Chart/PieChart";
import todoStore from "stores/todos/store";
import { Provider } from "react-redux";
import dateFns from "utils/date-fn";
import DownloadReport from "components/component/DownloadReport";

export default function index() {
  const {
    date,
    month,
    year,
    day
  } = dateFns();

  return (
    <section className={ style.todos_sections }>
      <main className={ style.todos_sections_main }>
        <Provider store={todoStore}>
          <div className={style.todos_sections_main_header}>
            <Title level="h5">{ date } {month} {year}, {day}</Title>
            <DownloadReport />
          </div>
          <PieChart/>
          <div className={style.todos_sections_main_content}>
            <TodoForm />
          </div>
        </Provider>
      </main>
    </section>
  )
}