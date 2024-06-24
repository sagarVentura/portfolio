import { MailOutline,PhonePortraitOutline,CalculatorOutline ,ShareSocialOutline } from "react-ionicons";

function Details() {
  return (
    <div className="contacts-list">
    <div className="contact-item">
      <div className="icon-box">
        <MailOutline
          color={"#00000"}
          title={"email"}
        />
      </div>
      <div className="contact-info">
        <p className="contact-title">Email</p>
        <a href="mailto:sagarmp7731@gmail.com" className="contact-link">
          sagarmp7731@gmail.com
        </a>
      </div>
    </div>
    {/* <div className="contact-item">
      <div className="icon-box">
        <CalculatorOutline
          color={"#00000"}
          title={"time"}

        />
      </div>
      <div className="contact-info">
        <p className="contact-title">Birthday</p>
<time datetime="2000-04-29">April 29, 2000</time>        
      </div>
    </div> */}
    <div className="contact-item">
      <div className="icon-box">
        <PhonePortraitOutline
          color={"#00000"}
          title={"phone"}
          
        />
      </div>
      <div className="contact-info">
        <p className="contact-title">Phone</p>
        <a href="tel:7058660287" className="contact-link">
          7058660287
        </a>
      </div>
    </div>
    <div className="contact-item">
      <div className="icon-box">
        <ShareSocialOutline
          color={"#00000"}
          title={"Linkdin"}
          
        />
      </div>
      <div className="contact-info">
        <p className="contact-title">LinkDin</p>
        <a href=" https://www.linkedin.com/in/sagarpatil7731" className="contact-link">
        sagarpatil7731
        </a>
      </div>
    </div>
    
    </div>
   
  );
}
export default Details;

function SocialList(){
  return (

      <div>
      <ul class="social-list">
<li className="social-item">
  
</li>
<li className="social-item"></li>
<li className="social-item"></li>
          </ul>
      </div>
  )
}