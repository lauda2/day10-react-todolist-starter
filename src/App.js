import { useReducer } from 'react';
import './App.css';
import TodoGroup from './components/TodoGroup';
import TodoContext from './contexts/TodoContext';
import TodoReducer from './reducers/TodoReducer';
import AddTodo from './components/AddTodo';

export const initState = [];

function App() {
  const [state, dispatch] = useReducer(TodoReducer, initState);
  
  return (
    <div className="App">
      <TodoContext.Provider value={{ state, dispatch }}>
        <h1>Todo List</h1>
        { state.length === 0 && <div class="intro">Add the things you need to do today...</div> }
        <TodoGroup />
        <AddTodo />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
