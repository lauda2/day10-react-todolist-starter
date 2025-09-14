import { useContext, useState } from 'react';
import TodoContext from "../contexts/TodoContext";

function AddTodo() {
    const { state, dispatch } = useContext(TodoContext);
    const [text, setText] = useState("");

    return (<div>
        <input class="add-todo-input" type="text" onChange={(e) => {
            setText(e.target.value);
        }} value={text} />
        <button class="add-button" onClick={() => {
            dispatch({ type: "ADD_TODO", payload: { id: state.length + 1, text: text, done: false } });
            setText("");
        }}>add</button>
    </div>);
}

export default AddTodo;