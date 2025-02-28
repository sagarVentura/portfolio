import Header from "../component/common/Header"
import About from "./About"
import Contact from "./Contact"
import Portfolio from "./Portfolio"
import Resume from "./Resume"

function MainScreen() {
  return (
    <div className="flex flex-col gap-2" >
      <Header/>
        <About/>
        <Resume/>
        <Portfolio/>
        <Contact/>
    </div>
  )
}
export default MainScreen