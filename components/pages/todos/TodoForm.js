import style from "./TodoForm.module.scss";
import NoTaskDisplay from "./NoTaskDisplay";
import ActionTask from "./ActionTask";
import DisplayTask from "./DisplayTask";
import Button from "components/lib/button";
import { connect } from "react-redux";
import {
  addItem,
  doneAddItem
} from "stores/todos/actions";

function TodoForm (props) {
  const {
    todoItems,
    addItem,
    doneAddItem
  } = props;

  let Content = null;

  if (todoItems.length === 0) {
    Content = <NoTaskDisplay />
  } else {
    Content = todoItems.map(item => {
      const {
        id,
        text,
        isDone,
        actionType
      } = item;

      const onDoneAddItem = text => doneAddItem(id, text);  

      let Display = null;

      if (actionType === 'add' || actionType === 'edit') {
        Display = (
          <ActionTask 
            key={ id } 
            actionType={actionType} 
            text={text} 
            onDoneAddItem={onDoneAddItem} />
        );
      } else {
        Display = <DisplayTask key={id} text={text} isDone={isDone} />
      }

      return Display

    })
  }

  return (
    <div>
      { Content }
      <div className={style.todoForm_buttonwrap}>
        <Button onClick={ addItem }>Add Task</Button>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return { todoItems: state }
}

const mapDispatchToProps = {
  addItem,
  doneAddItem
};

export default connect( mapStateToProps, mapDispatchToProps )(TodoForm)