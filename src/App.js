import { useReducer } from 'react';
import './App.css';
import TodoContext from './contexts/TodoContext';
import TodoReducer from './reducers/TodoReducer';
import TodoList from './components/TodoList';

export const initState = [];

function App() {
  const [state, dispatch] = useReducer(TodoReducer, initState);
  
  return (
    <div className="App">
      <TodoContext.Provider value={{ state, dispatch }}>
        <TodoList />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
