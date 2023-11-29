import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainPage } from '../pages/MainPage';

export function Main() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainPage />,
    },
  ]);
  return (
    <div className='content container'>
      <RouterProvider router={router} />
    </div>
  );
}
