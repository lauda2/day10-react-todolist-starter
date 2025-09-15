import { useContext } from "react";
import TodoContext from "../contexts/TodoContext";
import TodoGenerator from "./TodoGenerator";
import TodoGroup from "./TodoGroup";
import { Empty } from "antd";


function TodoList() {
    const { state } = useContext(TodoContext);
    
    return (
        <div className="todo-list">
            <h1>Todo List</h1>
            {state.length === 0 && <Empty description="Add the things you need to do today..." />}
            <TodoGroup />
            <TodoGenerator />
        </div>
    )
}

export default TodoList;
