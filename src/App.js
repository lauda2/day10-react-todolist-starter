import { useContext, createContext, useReducer } from 'react';
import './App.css';

export const initState = [
  { id: 1, text: "the first todo", done: false },
  { id: 2, text: "the second todo", done: true }
];
export const TodoContext = createContext();

function ToDoItem(props) {
  return <div className="todo-item">
    <span className={props.todo.done ? "done" : ""}>{props.todo.text}</span>
  </div>;
}

function TodoGroup() {
  const { state, dispatch } = useContext(TodoContext);
  return <div>
    {state.map((item, index) => <ToDoItem key={index} todo={item} index={index} />)}
  </div>;
}

export function todoReducer(state, action) {
  return state;
}

function App() {
  const [state, dispatch] = useReducer(todoReducer, initState);
  return (
    <div className="App">
      <TodoContext.Provider value={{ state, dispatch }}>
        <TodoGroup />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
