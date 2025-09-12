import { useContext } from "react";
import ToDoItem from "./TodoItem";
import TodoContext from "../contexts/TodoContext";

function TodoGroup() {
  const { state, dispatch } = useContext(TodoContext);
  return <div>
    {state.map((item, index) => <ToDoItem key={index} todo={item} index={index} />)}
  </div>;
}

export default TodoGroup;