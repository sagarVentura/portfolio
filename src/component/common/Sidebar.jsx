import { useState } from "react";
import image from "../../assets/images/my-avatar.png";
import Details from "../Details";
import { ChevronDownOutline } from "react-ionicons";

function Sidebar() {
  const [hideDetail, setHideDetail] = useState(true);
  return (
    <div className="sidebar sm:!hidden ">
      <div>
        <button
          className="info_more-btn"
          onClick={() => {
            setHideDetail(!hideDetail);
          }}
        >
          <span  className="DropDowntext">Show Contacts</span>
          <div className="dropdownArrow">
            <ChevronDownOutline height="15px" width="15px"   title={"DropDown"} color={"hsl(45, 100%, 72%);"}
            />
          </div>
        </button>
      </div>
      <div className="sidebar-header">
        <div className="avatar-box center-align">
          <img src={image} alt="Richard hanrick" width="80" />
        </div>
        <div class="info-content">
          <h1 class="name" title="Sagar Patil">
            Sagar Patil
          </h1>

          <h2 class="title h2">React developer</h2>
        </div>
      </div>
      {
        <div className={hideDetail ? "hide" : "visible"}>
          <Details />
        </div>
      }
    </div>
  );
}
export default Sidebar;
