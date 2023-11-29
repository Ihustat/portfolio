import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { MainPage } from '../pages/MainPage';
import { ProjectPage } from '../pages/ProjectPage';
import { DBContext } from '../context/DBContext';
import { useState } from 'react';
import { db } from '../db/db';

export function Main() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <MainPage />,
    },
    {
      path: '/projects/:id',
      element: <ProjectPage />,
    },
  ]);

  const [projects, setProjects] = useState(db);

  const value = {
    projects,
    setProjects,
  };
  return (
    <div className='content container'>
      <DBContext.Provider value={value}>
        <RouterProvider router={router} />
      </DBContext.Provider>
    </div>
  );
}
