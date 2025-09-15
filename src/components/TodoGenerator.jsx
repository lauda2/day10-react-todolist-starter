import { useContext, useState } from 'react';
import TodoContext from "../contexts/TodoContext";
import { api } from '../api/mockApi';

function TodoGenerator() {
    const { dispatch } = useContext(TodoContext);
    const [text, setText] = useState("");

    const createTodo = (text) => {
        return api.post("/todos", { text: text, done: false })
            .then(response => response.data)
            .catch(error => {
                console.error("Error adding todo:", error);
                return null;
            });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            createTodo(text).then(newTodo => {
                if (newTodo) {
                    dispatch({ type: "ADD_TODO", payload: newTodo });
                    setText("");
                }
            });
        }
    };

    return (<div>
        <input className="add-todo-input" type="text" onChange={(e) => {
            setText(e.target.value);
        }} value={text} />
        <button className="add-button" onClick={handleSubmit}>add</button>
    </div>);
}

export default TodoGenerator;