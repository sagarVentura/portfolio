import { useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import { useEffect } from "react";

let Details = {
  ventura: {
    company: "Ventura Technologies",
    roleDescription:
      "Experienced React Developer expertise in mobile and web development, with proficiency across the project lifecycle. Skilled in creating responsive user interfaces using React and React Native, integrating robust backend solutions, and managing databases. Specializes in deploying applications on AWS for scalability and reliability. ",
    project: [
      {
        projectName: "SkillLelo",
        projectDiscription:
          "Skillelo, by Ventura, redefines leadership development with its digital coaching platform. It offers accessible coaching, personalized support,and seamless integration for organizations. For employees, it means skill enhancement and wellbeing support; for corporations, cost-effectiveness and talent retention. Skillelo combats the forgetting curve, measures ROI, and ensures confidentiality.",
        workDone: [
          "Developed a <span class='hightlight'> native mobile application</span> using <span class='hightlight'>React Native</span>, ensuring cross-platform compatibility and enhancing user accessibility and experience.",
          "Successfully integrated <span class='hightlight'>Stream</span> API to enable real-time <span class='hightlight'>chat functionality</span> across both web and mobile applications.",
          "Successfully integrated <span class='hightlight'>Stream </span>API to enable both<span class='hightlight'> group and one-on-one video call</span> functionalities across web and mobile applications. ",
          "Successfully <span class='hightlight'>deployed and configured Moodle </span>, setting up the Learning Management System (LMS) on servers and ensuring optimal performance and scalability.",
          "Configured <span class='hightlight'>Backend</span> for efficient data handling, <span class='hightlight'>managed database</span> interactions for secure and reliable data storage, and<span class='hightlight'> deployed the system on AWS</span>.",
        ],
      },
      {
        projectName: "Leammo",
        projectDiscription:
          "Leammo, our organization's flagship Learning Management System (LMS) built on React, delivers seamless learning experiences. It boasts robust user management, centralized content organization, and automated assessments for efficient learning. Customizable templates ensure alignment with our branding, while mobile-responsiveness guarantees accessibility across devices.",
        workDone: [
          "Developed a <span class='hightlight'>responsive dashboard</span>, tailored to user roles. ensured mobile compatibility for seamless access on all devices.",
          "Integrated RESTful APIs for efficient data operations and managed secure database interactions, ensuring reliable storage and retrieval for user management and course content.",
          "Implemented <span class='hightlight'>email sending functionality</span> using <span class='hightlight'>Nodemailer</span>, enabling automated notifications for user registration, password recovery, and course updates. Ensured reliable and secure email delivery.",
          "Deployed and <span class='hightlight'>configured the application on AWS</span>, setting up services  and to ensure scalability, reliability, and security. ",
        ],
      },
      {
        projectName: "Value Assessment",
        projectDiscription:
          "The Value Assessment  provide individuals with deep insights into their  archetypes through an interactive assessment test. By selecting from a series of thought-provoking questions and scenarios, users embark on a journey to uncover their core values and archetypal traits. These insights are then used to generate personalized reports that offer guidance for personal development and self-discovery.",
        workDone: [
          "Managed the setup of project and <span class='hightlight'>end to end  development</span>, including requirements analysis, frontend and backend development, database management, integration of assessment algorithms, and deployment on scalable cloud infrastructure. ",
          "Implemented <span class='hightlight'>custom report generation</span> capabilities using <span class='hightlight'>pdfmake</span>, allowing dynamic creation of detailed reports based on user assessments.",
          "Implemented <span class='hightlight'>email sending</span> functionality to automatically <span class='hightlight'>deliver assessment reports to clients via email</span> upon completion.",
        ],
      },
    ],
  },

  logicaldna: {
    company: "Logical DNA",
    roleDescription:
      "As a Software Developer specializing in web development, I design, develop, and maintain  web applications. build user-friendly front-end interfaces using JavaScript frameworks like React & SAP UI5 and develop server-side logic with Node.js",
    project: [
      {
        projectName: "PoultryOS ERP",
        projectDiscription:
          "Poultry ERP provides a cost-effective solution for small farms, encompassing breeder, hatchery, and feed mill operations. It features modules for setup, transactions, and detailed reporting, with role-based access for security. ",
        workDone: [
          "Understanding the <span class='hightlight'>ERP flow</span> involve modules like sales, inventory, and finance interact systematically to streamline business processes. It also entails familiarity with the code base, including programming structure, database schema, and APIs.",
          "<span class='hightlight'>Validating daily transactions</span> in an ERP involves implementing an algorithm to ensure accuracy and consistency in recording and processing daily business activities.",
          "Configured REST APIs for efficient data handling, managed database interactions for secure and reliable data storage.",
        ],
      },
      {
        projectName: "Elevator ERP",
        projectDiscription:
          "Elevator ERP streamlines operations for elevator companies with sales and project management modules. It manages customer relationships from lead to order fulfillment and optimizes project lifecycles from planning to execution.",
        workDone: [
          "The development of a specialized <span class='hightlight'>PDF generation function tailored for quotation generation.</span> This feature automates the creation of professional and detailed quotations essential for sales processes.",
          " <span class='hightlight'>Developed a project module</span> for the Elevator ERP that tracks project progress in real-time, integrates validation processes for data accuracy, and manages payment terms seamlessly..",
          "Configured REST APIs for efficient data handling, managed database interactions for secure and reliable data storage.",
        ],
      },
    ],
  },
};

function DetailWork() {
  let params = useParams();
  let company = params.company;
  useEffect(() => {
    // scrollRef.current.scrollIntoView({behavior:'auto'});
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="about active outlet  workFont">
      <header>
        <h2 className="h2 article-title">Detail Work</h2>
      </header>
      <DetailWorkComponent data={Details[company]} />
    </div>
  );
}
export default DetailWork;

function DetailWorkComponent({ data }) {
  return (
    <div style={{ color: "white" }}>
      <h2>{data.company}</h2>
      <p className="rolediscriptiom">{data.roleDescription}</p>
      <div className="project">Project</div>

      <div>
        {data.project.map((ele) => {
          return (
            <div className="work-card">
              <h4 style={{ color: "#f5d9d5" }}>{ele.projectName}</h4>
              <p>{ele.projectDiscription}</p>
              <h5>Role And Responsibilities:</h5>

              <ul>
                {ele.workDone.map((work, index) => {
                  return (
                    <li className="worklist">
                      <span
                        key={index}
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(work),
                        }}
                      />
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
