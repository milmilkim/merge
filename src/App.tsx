import { RouterProvider, createHashRouter } from 'react-router-dom';
import CommonLayout from './components/layout/CommonLayout';

import Home from './pages/Home';
import About from './pages/About';
import Event from './pages/Event';
import Film from './pages/Film';
import Ticket from './pages/Ticket';

const router = createHashRouter(
  [
    {
      path: '/',
      element: <CommonLayout />,
      children: [
        {
          path: '',
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/event',
          element: <Event />,
        },
        {
          path: '/film',
          element: <Film />,
        },
        {
          path: '/ticket',
          element: <Ticket />,
        },
      ],
    },
  ],
  {
    basename:
    import.meta.env.MODE === 'production' ? `https://milmilkim.github.io/project-merge/` : '/',
  }
);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
