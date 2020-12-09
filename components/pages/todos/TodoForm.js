import style from "./TodoForm.module.scss";
import NoTaskDisplay from "./NoTaskDisplay";
import ActionTask from "./ActionTask";
import DisplayTask from "./DisplayTask";
import Button from "components/lib/button";
import { connect } from "react-redux";
import mapDispatchToProps from "stores/todos/actions";

function TodoForm (props) {
  const {
    todoItems,
    addItem,
    doneAddItem,
    doneTaskItem,
    deleteTaskItem,
    editTaskItem
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
      const onDoneTaskItem = isDone => doneTaskItem(id, isDone);
      const onDeleteTaskItem = () => deleteTaskItem(id);
      const onEditTaskItem = () => editTaskItem(id);

      let Display = null;

      if (actionType === 'add' || actionType === 'edit') {
        Display = (
          <ActionTask 
            key={ id } 
            actionType={actionType} 
            text={text} 
            onDoneAddItem={onDoneAddItem}
            onDeleteItem={onDeleteTaskItem} />
        );
      } else {
        Display = (
          <DisplayTask 
            key={id} 
            text={text} 
            isDone={isDone} 
            onEditTask={onEditTaskItem}
            onDoneTask={onDoneTaskItem} 
            onDeleteItem={onDeleteTaskItem} />
        );
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

export default connect( mapStateToProps, mapDispatchToProps )(TodoForm)