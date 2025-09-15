import { useContext } from "react";
import { useParams } from "react-router";
import TodoContext from "../contexts/TodoContext";
import ToDoItem from "../components/TodoItem";

function TodoDetailPage() {
  const { id } = useParams();
  const { state } = useContext(TodoContext);
  const todo = state.find(item => item.id === id);
  return <div><h1>Todo Detail</h1>{todo ? <ToDoItem todo={todo} /> : "Todo not found"}</div>;
}

export default TodoDetailPage;