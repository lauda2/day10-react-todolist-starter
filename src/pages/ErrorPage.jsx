import { useRouteError } from 'react-router';

function ErrorPage() {
  const error = useRouteError();
  return <div>{
    error.status === 404 ? <h1>Page not found</h1> :
      JSON.stringify(error)
  }</div>;
}

export default ErrorPage;