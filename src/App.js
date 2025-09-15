import { useEffect, useReducer } from 'react';
import './App.css';
import TodoContext from './contexts/TodoContext';
import TodoReducer from './reducers/TodoReducer';
import { createBrowserRouter, RouterProvider } from 'react-router';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import DefaultLayout from './layouts/DefaultLayout';
import DoneListPage from './pages/DoneListPage';
import TodoDetailPage from './pages/TodoDetailPage';
import AboutUsPage from './pages/AboutUsPage';
import { api } from './api/mockApi';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/todos/:id",
        element: <TodoDetailPage />
      },
      {
        path: "/done",
        element: <DoneListPage />
      },
      {
        path: "/about",
        element: <AboutUsPage />
      }
    ]
  }
]);

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
