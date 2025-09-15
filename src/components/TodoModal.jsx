import { useContext, useState } from 'react';
import { Modal, Input } from 'antd';
import { api } from '../api/mockApi';
import TodoContext from '../contexts/TodoContext';

function TodoModal(props) {
    const { TextArea } = Input;
    const [text, setText] = useState(props.todo ? props.todo.text : '');
    const {dispatch} = useContext(TodoContext);

    function handleChange(e) {
        setText(e.target.value);
    }

    function handleOk() {
        api.put(`/todos/${props.todo.id}`, { ...props.todo, text: text })
        .then(response => {
            dispatch({ type: "UPDATE_TODO", payload: response.data });
        });
        props.onClose();
    }

    return <Modal title="Edit Todo" open={props.isOpen} onOk={handleOk} onCancel={props.onClose}>
        <TextArea value={text} onChange={handleChange} />
    </Modal>;
}

export default TodoModal;