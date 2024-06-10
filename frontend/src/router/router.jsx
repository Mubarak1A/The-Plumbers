import { createBrowserRouter } from 'react-router-dom'
import App from '../App';
import LandingPage from '../pages/landingPage/LandingPage';

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: '/',
          element: <LandingPage />
        }
      ]
    },
  ]);

  export default router;
