import { useContext, createContext, useReducer } from 'react';
import './App.css';
import TodoGroup from './components/TodoGroup';
import TodoContext from './contexts/TodoContext';
import TodoReducer from './reducers/TodoReducer';

export const initState = [
  { id: 1, text: "the first todo", done: false },
  { id: 2, text: "the second todo", done: true }
];

function App() {
  const [state, dispatch] = useReducer(TodoReducer, initState);
  return (
    <div className="App">
      <TodoContext.Provider value={{ state, dispatch }}>
        <TodoGroup />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
