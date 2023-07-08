import './App.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import TanStackQuery from './pages/tanstack-query';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!</div>,
  },
  {
    path: '/sharetquery',
    element: <TanStackQuery />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
