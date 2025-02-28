import { useRef, useState } from "react";
import { ArrowDownCircleOutline } from "react-ionicons";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  let nameRef = useRef();
  let emailRef = useRef();
  let messageRef = useRef("Website browse");
  const [mailsend, setMailSend] = useState(false);
//   function checkValidation(event) {
//     event.preventDefault();
//         let name = nameRef.current.value;
//     let email = emailRef.current.value;
//     let message = messageRef.current.value;
//     if (name.trim() == "" || name == null) {
//       let message = "please enter your name";
//       toast.error('please enter your name', {
//         position: "top-right",
//         autoClose: 4000,
//         hideProgressBar: true,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "dark",
//         });
//         return
//     }
//     if (email.trim() != "" || email != null) {
//       // Define a regular expression for validating an email address
//       const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

//       let API="https://api.sagarpatil.tech"
//       // Test the email against the regular expression
//       let result = re.test(String(email).toLowerCase());
//       if (result) {
//         let obj={
//           name,email,message,
//           type:'ThanksWebsiteVisit'
//         }
//         async function fetchData() {
//           try {
//             // Make the API call using fetch
//             const response = await fetch(
//               `${API}/api/user/email`,
//               {
//                 method: "POST", // or 'PUT', 'DELETE', etc.
//                 headers: {
//                   "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(obj), // Convert the data to a JSON string
//               }
//             );
//             // Check if the response is ok (status code in the range 200-299)
//             if (!response.ok) {
//               throw new Error(
//                 "Network response was not ok " + response.statusText
//               );
//             }
//             // Parse the JSON from the response
//             const data = await response.json();
//             // Handle the data from the API
//             console.log(obj);
//             // You can update the DOM or perform other actions with the data here
//           } catch (error) {
//             // Handle any errors that occurred during the fetch
//             console.error("There was a problem with the fetch operation:", error);
//           }
//         }

//       function pdfDownload() {
//         // Now you can use the base64Data as needed
    
//         var oXHR = new XMLHttpRequest();
//         oXHR.open(
//           "GET",
//           `${API}/pdf/resume.pdf`,
//           true
//         );
//         oXHR.responseType = "blob";
    
//         oXHR.onload = function (event) {
//           var blob = oXHR.response;
    
//           // Create a temporary anchor element to initiate the download
//           var link = document.createElement("a");
//           link.href = URL.createObjectURL(blob);
    
//           // Set the download attribute to specify the filename for the downloaded file
//           link.setAttribute("download", `sagar patil(resume).pdf`);
    
//           // Trigger the click event on the anchor element
//           link.click();
    
//           // Clean up - revoke the object URL and remove the anchor element after the click event has been triggered
//           URL.revokeObjectURL(link.href);
//         };
    
//         oXHR.send();
//       }
//        if(!mailsend){
//        fetchData();
//         pdfDownload();
//         setMailSend(true);  
//         toast.success('PDF is Downloaded', {
//           position: "top-right",
//           autoClose: 4000,
//           hideProgressBar: true,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "dark",
//           });
//           return
//        }
//        else{
//         pdfDownload();
//         toast.success('PDF is downLoaded', {
//           position: "top-right",
//           autoClose: 4000,
//           hideProgressBar: true,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "dark",
//           });
//           return
//        }
//       }
//        else {
//         toast.error('Enter valide email', {
//           position: "top-right",
//           autoClose: 4000,
//           hideProgressBar: true,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: "dark",
//           });
//           return
//       }
//     } else {
//  toast.error('Enter Valide  email', {
//         position: "top-right",
//         autoClose: 4000,
//         hideProgressBar: true,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: "dark",
//         });
//         return    }
//   }


function ViewResume(){
  window.open("https://drive.google.com/file/d/14ocJDGpwGsfBKTcnII-cSH9jjVPW0uie/view?usp=sharing", "_blank")

}
  return (
    <div className="about active "  id="contact" style={{position:'relative'}}>
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>
      
<div style={{display:'flex', justifyContent:'start'}}>
        <button onClick={ViewResume} className="form-btn" style={{marginLeft:'0px'}}>
          <span >
            <ArrowDownCircleOutline
              width={"1.5em"}
              height={"1.5em"}
              color={"hsl(45, 100%, 72%)"}
            />
            Get Resume
          </span>
          <a href="https://drive.google.com/file/d/14ocJDGpwGsfBKTcnII-cSH9jjVPW0uie/view?usp=sharing"></a>
        </button>
        </div>
      <ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"
/>
    </div>
  );
}

export default Contact;
