import { useReducer } from 'react';
import './App.css';
import TodoContext from './contexts/TodoContext';
import TodoReducer from './reducers/TodoReducer';
import TodoList from './components/TodoList';
import { createBrowserRouter, NavLink, Outlet, RouterProvider, useRouteError } from 'react-router';

function DefaultLayout() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

function ErrorPage() {
  const error = useRouteError();
  return <div>{
    error.status === 404 ? <h1>Page not found</h1> :
      JSON.stringify(error)
  }</div>;
}

const routes = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <TodoList />
      }
    ]
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
