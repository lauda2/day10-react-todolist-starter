import { useContext } from "react";
import TodoContext from "../contexts/TodoContext";
import { useNavigate } from "react-router";

function ToDoItem(props) {
    const { dispatch } = useContext(TodoContext);
    const navigate = useNavigate();
    function makeAsDone() {
        dispatch({ type: "TOGGLE_TODO", payload: { id: props.todo.id } });
    }

    return <div className="todo-row"><div className="todo-item">
        <span className={props.todo.done ? "done" : ""} onClick={makeAsDone}>{props.todo.text}</span>
    </div>
        <button className="remove-button" onClick={() => {
            dispatch({ type: "REMOVE_TODO", payload: { id: props.todo.id } });
        }}>X</button>
        <button className="detail-button" onClick={() => {
            navigate(`/todos/${props.todo.id}`);
        }}>detail</button><br /></div>;
}

export default ToDoItem;