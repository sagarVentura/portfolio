import cssIcon from '../assets/images/stackIcon/css.png';
import reactIcon from '../assets/images/stackIcon/react.png';
import awsIcon from '../assets/images/stackIcon/aws.png';
import jsIcon from '../assets/images/stackIcon/js.png';
import nodeIcon from '../assets/images/stackIcon/node.png';
import mongoIcon from '../assets/images/stackIcon/mongo.png';
import sqlIcon from '../assets/images/stackIcon/sql.png';
import htmlIcon from '../assets/images/stackIcon/htmk.png';
import playStoreIcon from '../assets/images/stackIcon/androidStore.png';
import appleStoreIcon from '../assets/images/stackIcon/appleStore.png'
import firebaseIcon from '../assets/images/stackIcon/firebase.png';
import cloudDevelopmentIcon from '../assets/images/stackIcon/cloudDevelopment.png';
import mobileDevelopmentIcon from '../assets/images/stackIcon/mobile.png';
import webDevelopmentIcon from '../assets/images/stackIcon/webDevelopment.png';




let serviceList=[{
  src:webDevelopmentIcon,
  alt:'Web development',
  title:'Web development',
  discription:'',
  stack:[{url:htmlIcon,Heading:"HTML",className:"reactIcon"},{url:cssIcon,Heading:"CSS",className:"cssIcon"},
  {url:jsIcon,Heading:"JS",className:"reactIcon"},{url:reactIcon,Heading:"React JS",className:"reactIcon"},{url:nodeIcon,Heading:"Node JS",className:"reactIcon"},
  {url:mongoIcon,Heading:"Mongo db",className:"reactIcon"},{url:sqlIcon,Heading:"MySql",className:"reactIcon"},
]
},
{
  src:mobileDevelopmentIcon,
  alt:'Mobile development',
  title:'Mobile development',
  discription:'',
  stack:[{url:reactIcon,Heading:"React Native",className:"reactIcon"},{url:playStoreIcon,Heading:'Play Store',className:"reactIcon"},{url:appleStoreIcon,Heading:'Apple Store',className:"reactIcon"}]
},
{
  src:cloudDevelopmentIcon,
  alt:'Cloud',
  title:'Cloud',
  discription:'',
  stack:[{url:awsIcon,Heading:"AWS",className:'awsIcon'},{url:firebaseIcon,className:"reactIcon",Heading:'Firebase'}]
},
]


function About() {
  return (
    
    <div className='about active outlet'>
      <header>
          <h2 className="h2 article-title">About me</h2>
        </header>
        <section className="about-text">
          <p className='landingIntroduction'>
          Experienced React Developer with  2 years of expertise in mobile and web development. Proficient in crafting responsive and user-friendly interfaces using React and React Native, while seamlessly integrating robust backend solutions. 
          </p>

          <p className='landingIntroduction'>
          Skilled in managing databases and deploying scalable, reliable applications on AWS. Specializes in developing full-stack applications, utilizing JavaScript frameworks like React and SAP UI5 for front-end development and Node.js for server-side logic. Passionate about delivering high-quality software solutions throughout the project lifecycle.
             </p>
        </section>

      <section
      className="service">
        <header>
        <h3 className="h3 service-title">What I'm Doing</h3>
        </header>
        <div>
          <ServiceCard  serviceList={serviceList}/>
        </div>
      </section>
    </div>
  )
}
export default About;


function ServiceCard({serviceList}){
  
  return (
    <ul className="service-list">
    {serviceList.map((service)=>{
    return(<li className="service-item">
  <div className="service-icon-box">
                <img src={service.src} alt={service.alt} w/>
              </div>

              <div className="service-content-box">
                <h3 className="h3 service-item-title">{service.title}</h3>

                <p className="service-item-text">
                  {service.discription}
                </p>
                <div  className='tech-stack'>
                {service.stack.map((Ele,index)=>{
                  let url=Ele.url;
                  let heading=Ele.Heading;
              return (<div key={index} className='tect-stack-div'>
                       {/* <Icon className={`${Ele.className} stack-icon`} /> */}
                       <img src={url} alt="" srcset="" className={`stack-icon ${ Ele.Heading=="AWS" && "awsCSS"}`}/>
                       <h5 style={{color:'white'}}>{heading}</h5>
                    </div>)

               })}

              </div>
              </div>

            
    </li>)
    })}
    </ul>
  )

}




function TeckStack(){
  
}
