import { useContext } from "react";
import TodoContext from "../contexts/TodoContext";

function ToDoItem(props) {
  const { state, dispatch } = useContext(TodoContext);
  function makeAsDone() {
    dispatch({ type: "TOGGLE_TODO", payload: { id: props.todo.id } });
  }

  return <div className="todo-item">
    <span className={props.todo.done ? "done" : ""} onClick={makeAsDone}>{props.todo.text}</span>
  </div>;
}

export default ToDoItem;