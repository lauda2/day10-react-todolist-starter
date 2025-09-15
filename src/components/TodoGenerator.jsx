import { useContext, useState } from 'react';
import TodoContext from "../contexts/TodoContext";

function TodoGenerator() {
    const { state, dispatch } = useContext(TodoContext);
    const [text, setText] = useState("");

    return (<div>
        <input className="add-todo-input" type="text" onChange={(e) => {
            setText(e.target.value);
        }} value={text} />
        <button className="add-button" onClick={() => {
            dispatch({ type: "ADD_TODO", payload: { id: state.length + 1, text: text, done: false } });
            setText("");
        }}>add</button>
    </div>);
}

export default TodoGenerator;