import { useContext } from "react";
import TodoContext from "../contexts/TodoContext";
import { useNavigate } from "react-router";
import { api } from "../api/mockApi";

function ToDoItem(props) {
    const { dispatch } = useContext(TodoContext);
    const navigate = useNavigate();

    const updateTodo = (updatedTodo) => {
        return api.put(`/todos/${updatedTodo.id}`, updatedTodo)
            .then(response => response.data)
            .catch(error => {
                console.error("Error updating todo:", error);
                return null;
            });
    }

    const deleteTodo = (id) => {
        return api.delete(`/todos/${id}`)
            .then(response => response.data)
            .catch(error => {
                console.error("Error deleting todo:", error);
                return null;
            });
    }

    function makeAsDone() {
        updateTodo({ ...props.todo, done: !props.todo.done }).then(() => {
            dispatch({ type: "TOGGLE_TODO", payload: { id: props.todo.id } });
        });
    }

    function handleDelete() {
        deleteTodo(props.todo.id).then(() => {
            dispatch({ type: "REMOVE_TODO", payload: { id: props.todo.id } });
        });
    }


    return <div className="todo-row"><div className="todo-item">
        <span className={props.todo.done ? "done" : ""} onClick={makeAsDone}>{props.todo.text}</span>
    </div>
        <button className="remove-button" onClick={handleDelete}>X</button>
        <button className="detail-button" onClick={() => {
            navigate(`/todos/${props.todo.id}`);
        }}>detail</button><br /></div>;
}

export default ToDoItem;