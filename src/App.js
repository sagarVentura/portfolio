import logo from './logo.svg';
import './App.css';
import route from './route/Route';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <RouterProvider router={route}/>
  );
}

export default App;
