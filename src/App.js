import { useEffect, useReducer } from 'react';
import './App.css';
import TodoContext from './contexts/TodoContext';
import TodoReducer from './reducers/TodoReducer';
import { RouterProvider } from 'react-router';
import { api } from './api/mockApi';
import { routes } from './routes/routes';

const loadTodos = () => {
  return api.get("/todos")
    .then(response => response.data)
    .catch(error => {
      console.error("Error fetching todos:", error);
      return [];
    });
}

function App() {
  const [state, dispatch] = useReducer(TodoReducer, []);

  useEffect(() => {
    loadTodos().then(todos => {
      dispatch({ type: "SET_TODOS", payload: todos });
    });
  }, [dispatch]);

  return (
    <div className="App">
      <TodoContext.Provider value={{ state, dispatch }}>
        <RouterProvider router={routes} />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
