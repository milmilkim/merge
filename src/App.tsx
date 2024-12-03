import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CommonLayout5th from './components/5th/layouts/CommonLayout';
import CommonLayout4th from './components/4th/layouts/CommonLayout';
import Home from './pages/4th/Home';
import About from './pages/4th/About';
import Event from './pages/4th/Event';
import Film from './pages/4th/Film';
import Ticket from './pages/4th/Ticket';

import Home5th from './pages/5th/Home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <CommonLayout5th />,
    children: [
      {
        path: '',
        element: <Home5th />,
      },
    ],
  },
  {
    path: '/4th',
    element: <CommonLayout4th />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'event',
        element: <Event />,
      },
      {
        path: 'film',
        element: <Film />,
      },
      {
        path: 'ticket',
        element: <Ticket />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
