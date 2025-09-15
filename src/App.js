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
import axios from 'axios';

const api = axios.create({
  baseURL: "https://68c7ac9e5d8d9f51473288db.mockapi.io/",
  headers: { "Content-Type": "application/json" },
  timeout: 10000
});

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

function App() {
  const [state, dispatch] = useReducer(TodoReducer, []);

  useEffect(() => {
    api.get("/todos")
      .then(response => {
        dispatch({ type: "SET_TODOS", payload: response.data });
      })
      .catch(error => {
        console.error("Error fetching todos:", error);
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
