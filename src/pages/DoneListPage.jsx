import { useContext } from "react";
import TodoContext from "../contexts/TodoContext";
import ToDoItem from "../components/TodoItem";

function DoneListPage() {
    const { state } = useContext(TodoContext);

    const done = state.filter(item => item.done);
    return <div>
        {done.length === 0 ? <p>No done tasks</p> : done.map((item, index) => <ToDoItem key={index} todo={item} index={index} />)}
    </div>;
};

export default DoneListPage;
