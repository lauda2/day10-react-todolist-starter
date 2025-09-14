import { useReducer, useState } from 'react';
import './App.css';
import TodoGroup from './components/TodoGroup';
import TodoContext from './contexts/TodoContext';
import TodoReducer from './reducers/TodoReducer';

export const initState = [
  // { id: 1, text: "the first todo", done: false },
  // { id: 2, text: "the second todo", done: true }
];

function App() {
  const [state, dispatch] = useReducer(TodoReducer, initState);
  const [text, setText] = useState("");
  return (
    <div className="App">
      <TodoContext.Provider value={{ state, dispatch }}>
        <h1>Todo List</h1>
        {
          state.length === 0 && <div>Add the things you need to do today...</div>
        }
        <TodoGroup />
        <div>
          <input type="text" onChange={(e) => {
            setText(e.target.value);
          }} value={text} />
          <button onClick={() => {
            dispatch({ type: "ADD_TODO", payload: { id: state.length + 1, text: text, done: false } });
            setText("");
          }}>add</button>
        </div>
      </TodoContext.Provider>
    </div>
  );
}

export default App;
