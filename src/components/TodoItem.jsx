import { useContext, useState } from "react";
import TodoContext from "../contexts/TodoContext";
import { useNavigate } from "react-router";
import { useTodoService } from "../useTodoService";
import { Button } from 'antd';
import { EditOutlined } from '@ant-design/icons';
import TodoModal from "./TodoModal";

function ToDoItem(props) {
    const { dispatch } = useContext(TodoContext);
    const navigate = useNavigate();
    const { updateTodo, deleteTodo } = useTodoService();
    const [isModalOpen, setIsModalOpen] = useState(false);

    function makeAsDone() {
        updateTodo({ ...props.todo, done: !props.todo.done }).then(todo => {
            dispatch({ type: "UPDATE_TODO", payload: todo });
        });
    }

    function handleDelete() {
        deleteTodo(props.todo.id).then(() => {
            dispatch({ type: "REMOVE_TODO", payload: { id: props.todo.id } });
        });
    }

    function handleEdit() {
        setIsModalOpen(true);
    }


    return <><TodoModal todo={props.todo} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /><div className="todo-row"><div className="todo-item">
        <span className={props.todo.done ? "done" : ""} onClick={makeAsDone}>{props.todo.text}</span>
        <Button style={{ float: "right" }} type="text" shape="circle" icon={<EditOutlined />} onClick={handleEdit} />
    </div>
        <button className="remove-button" onClick={handleDelete}>X</button>
        <button className="detail-button" onClick={() => {
            navigate(`/todos/${props.todo.id}`);
        }}>detail</button><br /></div></>;
}

export default ToDoItem;