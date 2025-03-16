import './ui.css';
import route from './route/Route';
import { RouterProvider } from 'react-router-dom';
import ReactGA from 'react-ga4';
import { useEffect } from 'react';
const TRACKING_ID="G-TXWRTK971M"

function App() {
  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.send("pageview"); // Sends a pageview when the app loads
}, []);
  return (
    <RouterProvider router={route}/>
  );
}

export default App;
