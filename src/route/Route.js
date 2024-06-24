import {
  createBrowserRouter,
} from "react-router-dom";
import Layout from "../Layout";
import About from "../screen/About";
import Resume from "../screen/Resume";
import Contact from "../screen/Contact";
import Work from "../screen/Work";
import { useNavigate } from "react-router-dom";
import DetailWork from "../screen/DetailWork";
import Portfolio from "../screen/Portfolio";




  let route=createBrowserRouter([{
    path:'/',
    element:<Layout/>,
    children:[
      {
        path:"/",
        element:<About/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:'/resume',
        element:<Resume/>
      },
      {
        path:'/contact',
        element:<Contact/>
      },
      {
        path:'/portfolio',
        element:<Portfolio/>
      },
      {
        path:'/resume/:company',
        element:<DetailWork/>
      },
      {
        path:"*",
        element:<Home/>
      },
    ]
  }]);

  function Home(){
  let history =useNavigate();
      history("/")
  }


export default route;