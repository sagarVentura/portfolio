import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [routing, setRouting] = useState("about");
  let history = useNavigate();
  let scrollRef=useRef();
  useEffect(()=>{
    // scrollRef.current.scrollIntoView({behavior:'auto'});
    window.scrollTo(0, 0);
  },[routing])

  let route = [
    {
      route: "about",
    },
    {
      route: "resume",
    },
    {
      route: "portfolio",
    },
    {
      route: "contact",
    },
  ];
  return (
    <nav className="width-per-100 flex" ref={scrollRef}> 
      <ul class="navbar-style ">
        {route.map((ele) => {
          return (
            <li class="navbar-item">
              <button
                className={`navbar-link  ${ele.route == routing && "active"}`}
                data-nav-link
                onClick={() => {
                  setRouting(ele.route);
                  history(ele.route);
                }}
              >
                {ele.route}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
export default Header;
