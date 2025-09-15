import { useReducer, useContext } from 'react';
import './App.css';
import TodoContext from './contexts/TodoContext';
import TodoReducer from './reducers/TodoReducer';
import { createBrowserRouter, NavLink, Outlet, RouterProvider, useParams } from 'react-router';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import ToDoItem from './components/TodoItem';

function DefaultLayout() {
  return (
    <div>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/todos/1">ID 1</NavLink>
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

function TodoDetailPage() {
  const { id } = useParams();
  const { state } = useContext(TodoContext);
  const todo = state.find(item => item.id === parseInt(id));
  return <div>{todo ? <ToDoItem todo={todo} /> : "Todo not found"}</div>;
}


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
