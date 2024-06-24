
import { useEffect, useRef } from 'react';
import { BookOutline } from 'react-ionicons'
import { useNavigate } from 'react-router-dom';
function Resume() {
let scrollRef=useRef()
  
  return (
     <div className='about active outlet'  ref={scrollRef}>
  <header>
      <h2 className="h2 article-title">Resume</h2>
    </header>
    <Experience  obj={experience} detail="Experience"/>
    <Experience  obj={education} detail="Education"/>

  </div>)
}
export default Resume;

let experience = [
  {
    profile: "React Developer",
    company: "Ventura technologies",
    start: "Nov 2023",
    end: null,
    DetailWork: "ventura",
    discription:"Ventura is a fast-growing product base Learning Design and Technology company serving global clients with holistic solutions in the Learning and Development space."
  },
  {
    profile: "Software Developer",
    company: "Logical Dna",
    start: "Aug 2022",
    end: "Nov 2023",
    DetailWork: "logicaldna",
    discription:"LogicalDNA is product base company that works with global livestock companies and individual farmers."
  },
];

let education = [
  {
    profile:"BE Mech",
    company: "SSBT's college of engineering, jalgaon",
    start: "2018",
    end:"2022",
    percentage :"8.4 CGPA"

  },
  {
    profile: "HSC",
    company: "Nutan Maratha college, jalgaon",
    start: " 2017",
    end: "Nov 2018",
    percentage: "76%",
  },
  {
    profile: "SSC",
    company: "La.Na. vidyalaya, jalgaon",
    start: "2015",
    end: "2016",
    percentage: "90%",
  },
];

function Experience({obj,detail}) {
  let history=useNavigate();
  return (
    <>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <BookOutline name="book-outline" color={"hsl(45, 100%, 72%)"}/>
          </div>

          <h3 className="h3">{detail}</h3>
        </div>

        <ol className="timeline-list">
          {obj.map((exp) => {
            return (
              <li className="timeline-item">
                <p className={`h3 ${detail=="Experience" && "heading"}`}  >
                {exp.profile} {detail!="Experience" &&<span  className='inline-block'  > ({exp.percentage})
                </span>}
                </p>
                <h4 className="h4 ">
                {exp.company}
                </h4>
                

                <span>{exp.start} - {exp.end??"present"}</span>

                {detail=="Experience" &&
                (<>
                <p className="timeline-text">
                  {exp.discription}
                </p>
                <button className="detail-work-button" onClick={()=>{history(`${exp.DetailWork}`)}}>
                  Detail Work
                </button>
              </>)
          }
              </li>
            );
          })}
        </ol>
      </section>
    </>
  );
}
