import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [routing, setRouting] = useState("about");
  let scrollRef=useRef();
  let navigate=useNavigate();
  const scroll=(routing)=>{
    // scrollRef.current.scrollIntoView({behavior:'auto'});

    const section = document.getElementById(routing);
    if (section) {
      const headerHeight = document.getElementById("header")?.offsetHeight || 60; // Get header height or use default
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
      
      window.scrollTo({
        top: sectionPosition - headerHeight , // Adjust 10px for extra spacing
        behavior: "smooth",
      });
  
    }
    }


    useEffect(()=>{
      scroll(routing)
    },[routing])

  let route = [
    {
      route: "about",
    },
    {
      route: "resume",
    },
    {
      route: "project",
    },
    {
      route: "contact",
    },
  ];
  return (
    <nav className="width-per-100 flex " id="header" ref={scrollRef}> 
      <ul class="navbar-style ">
        {route.map((ele) => {
          return (
            <li class="navbar-item">
              <button
                className={`navbar-link  ${ele.route == routing && "active"}`}
                data-nav-link
                onClick={() => {
                  navigate("/");
                  setRouting(ele.route);
                 
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
