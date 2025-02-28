import { useNavigate } from "react-router-dom";
import github from "../assets/images/github.png"
import Button from "../component/reusableComponent/Button";

function Portfolio() {
  return (
    <div className="about active " id="project" style={{display:"flex",justifyContent:'center',}}>
      <div className="w-full ">
      <h2 className="h2 article-title">Project</h2>


        <h2  className="h3 mb-2"> Custom Component</h2>
        <CustomComponent/>
        

      </div>
    </div>
  )
}


function CustomComponent() {
  const  navigate=useNavigate()
  const navigateToSection = (section) => {
    window.open(
      `https://github.com/sagarVentura/CustomComponent.git#${section}`,
      "_blank"
    );
  };

  const components = [
    {
      title: "Select Box",
      section: "selectbox",
      url: github, // Replace with a valid image URL
      Demo: "",
    },
  ];

  return (
    <div className="flex gap-2 flex-wrap">
      {components.map((component, index) => {
        return (
          <div
            key={index}
            className="w-1/2 sm:w-1 md:w-1 lg:w-1/3 xl:w-1/3 sm:h-[20px] md:h-[140px] border-2 border-white pl-2 rounded-md flex flex-col justify-between"
          >
            {/* Title Section */}
            <div
              className="h3 w-full gap-3 cursor-pointer"
              onClick={() => navigateToSection(component.section)} // Correct onClick
            >
              {component.title}
            </div>

            {/* Image and Heading Section */}
            <div className="flex items-center gap-3 pb-2">
              <div className='w-[100px] h-[40px] mb-1'>
          <Button title={"Github"} classname={"bg-white text-[#010606] border-2 border-[#3986fa] hover:bg-[#e7f1fa]  px-2 py-0 rounded"} onClick={() => navigateToSection(component.section)} />
        </div>
        <div className='w-[100px] h-[40px] mb-1'>
          <Button title={"Demo"} classname={"  bg-[#3986fa] hover:bg-[#136ffb] text-white px-2 py-0 rounded"} onClick={()=>{navigate(`/portfolio/custom/${component.section}`)}} />
        </div>
            
            </div>
          </div>
        );
      })}
    </div>
  );
}


export default Portfolio