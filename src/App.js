import { useEffect, useReducer } from 'react';
import './App.css';
import TodoContext from './contexts/TodoContext';
import TodoReducer from './reducers/TodoReducer';
import { RouterProvider } from 'react-router';
import { routes } from './routes/routes';
import { useTodoService } from './useTodoService';

function App() {
  const [state, dispatch] = useReducer(TodoReducer, []);
  const { loadTodos } = useTodoService();

  useEffect(() => {
    loadTodos().then(todos => {
      dispatch({ type: "SET_TODOS", payload: todos });
    });
  }, []);

  return (
    <div className="App">
      <TodoContext.Provider value={{ state, dispatch }}>
        <RouterProvider router={routes} />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
