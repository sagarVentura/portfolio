import { Outlet } from "react-router-dom"
import Sidebar from "./component/common/Sidebar"
import Header from "./component/common/Header"
import MainScreen from "./screen/MainScreen"
function Layout() {
  return (
    <>
      <main >
      {/* <Header/> */}
      <div className="flex  SecondContainer">
      {/* <Sidebar/> */}
      <div className="main-content fontSize outlet">
      <MainScreen />
      </div>
      </div>
      </main>
     
    </>
  )
}
export default Layout
