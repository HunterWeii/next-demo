import style from "./styles.module.scss";
import {
  Title,
} from "components/lib/typography";
import TodoForm from "components/pages/todos/TodoForm";
import PieChart from "components/pages/todos/Chart/PieChart";
import todoStore from "stores/todos/store";
import { Provider } from "react-redux";
import dateFns from "utils/date-fn";
import Button from "components/lib/button";
import drawPDF from "utils/draw-pdf";
import { useState } from "react";

export default function index() {
  const {
    date,
    month,
    year,
    day
  } = dateFns();

  const [ buttonDisabled, setButtonDisabled ] = useState(false);
  const [ buttonText, setButtonText ] = useState("Download");

  const onReportDownload = async () => {
    setButtonDisabled(true);
    setButtonText("Generate ...");

    const result = await drawPDF();
    console.log(result);
    setButtonDisabled(true);
    setButtonText("Download")
  };

  return (
    <section className={ style.todos_sections }>
      <main className={ style.todos_sections_main }>
        <div className={style.todos_sections_main_header}>
          <Title level="h5">{ date } {month} {year}, {day}</Title>
          <Button disabled={ buttonDisabled} onClick={ onReportDownload }>{ buttonText }</Button>
        </div>
        <Provider store={todoStore}>
          <PieChart/>
          <div className={style.todos_sections_main_content}>
            <TodoForm />
          </div>
        </Provider>
      </main>
    </section>
  )
}