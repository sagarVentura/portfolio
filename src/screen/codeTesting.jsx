import { useEffect, useState } from "react"

function CodeTesting() {
    let [count ,setcount]=useState(0);

    useEffect(()=>{
     
        console.log(count," call  of useEffect")
        return (()=>{
            console.log(count ,"counting cleanup function")
        })
    },[count])
  return (
    <div className="active outlet">
        <button
        className="form-btn"
         onClick={()=>{
            setcount(++count);
        }}>Onclick</button>
    </div>
  )
}
export default CodeTesting