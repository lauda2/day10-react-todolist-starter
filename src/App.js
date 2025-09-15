import { useReducer } from 'react';
import './App.css';
import TodoContext from './contexts/TodoContext';
import TodoReducer from './reducers/TodoReducer';
import TodoList from './components/TodoList';
import { createBrowserRouter, RouterProvider } from 'react-router';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <TodoList />
  }
]);

export const initState = [];

function App() {
  const [state, dispatch] = useReducer(TodoReducer, initState);
  
  return (
    <div className="App">
      <TodoContext.Provider value={{ state, dispatch }}>
        <RouterProvider router={routes} />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
