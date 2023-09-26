import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.jsx';
import ErrorPage from './pages/Error.jsx';
import HomePage from './pages/Home.jsx';
import PortfolioPage from './pages/Portfolio.jsx';
import ResumePage from './pages/Resume.jsx';
import ContactMePage from './pages/ContactMe.jsx';

import './App.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'portfolio',
        element: <PortfolioPage />,
      },
      {
        path: 'resume',
        element: <ResumePage />,
      },
      {
        path: 'contactme',
        element: <ContactMePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
