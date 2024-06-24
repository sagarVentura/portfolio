import { Outlet } from "react-router-dom"
import Sidebar from "./component/common/Sidebar"
import Header from "./component/common/Header"
function Layout() {
  return (
    <>
      <main >
      <Header/>
      <div className="flex  SecondContainer">
      <Sidebar/>
      <div className="main-content fontSize">
      <Outlet />
      </div>
      </div>
      </main>
     
    </>
  )
}
export default Layout
