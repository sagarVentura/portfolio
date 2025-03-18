import { useNavigate } from "react-router-dom";
import github from "../assets/images/github.png"
import Button from "../component/reusableComponent/Button";
import selectboximage from "../assets/images/customComponent/selectbox.png"

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
      image:selectboximage
    },
  ];

  return (
    <div className="flex gap-2 flex-wrap" >
      {components.map((component, index) => {
        return (
          <div
            key={index}
            className="w-1/2 relative sm:w-1 md:w-1 lg:w-1/3 xl:w-1/4 sm:h-[20px] md:h-[140px] border-2 border-white  rounded-md flex flex-col justify-between "
             
                >
            {/* Title Section */}
            <div
              className="h3 w-full gap-3 cursor-pointer pl-2 !text-black font-bold"
              onClick={() => navigateToSection(component.section)} // Correct onClick
            >
              {component.title}
            </div>

            {/* Image and Heading Section */}
            <div className="flex items-center gap-3 pb-2 pl-2">
              <div className='w-fit sm:w-[100px] h-[40px] mb-1'>
          <Button title={"Github"} classname={"bg-white text-[#010606] border-2 border-[#3986fa]  sm:px-2 px-1 hover:bg-[#e7f1fa]   py-0 rounded"} onClick={() => navigateToSection(component.section)} />
        </div>
        <div className='w-fit sm:w-[100px] h-[40px] mb-1'>
          <Button title={"Demo"} classname={"  bg-[#3986fa] hover:bg-[#136ffb] text-white sm:px-2 px-1 rounded"} onClick={()=>{navigate(`/portfolio/custom/${component.section}`)}} />
        </div>
            
            </div>

            <div className="w-full h-full absolute z-[-1]  opacity-70"  
            style={{
              backgroundImage: `url(${component.image})`,
                backgroundSize: "cover",
              backgroundPosition: "center",
              

            }}></div>
          </div>
        );
      })}
    </div>
  );
}


export default Portfolio