import React, {useState, useRef} from 'react';
import './Forgetpassword.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Base_url } from '../env';

export default function Forgetpassword() {
  const navigate = useNavigate()
  const url=Base_url
  const [forgetpassword, setForgetPassword]= useState({
    email: ""
  })
  const handleChange=(event)=>{
    let {value,name} =event.target;
    setForgetPassword((pre)=>{
      pre={...pre,[name]:value}
      return pre
    })
  }

  
  function sendOtp(e){
    e.preventDefault();
    let forgetpass={
      email: forgetpassword.email
    }
   axios.post(url+"/forgotPassword", forgetpass)
   .then((response)=>{
    
    if(response.data.status === 200){
      console.log(forgetpassword.email);
      navigate("/otp", {state:{"email": forgetpassword.email}})
    }
    
   })
   .catch(
    console.log("Email Id is not registered")
   )
   

  }
 

  return (
    <section className='forgetpass'>
        <div className='more-size'>
        <div className='forgetbox'>
            <div className='forleft'>
                <img src='/images/forget-password.png'/>

            </div>
            <div className='forright'>
            <div className="forfrm">
              <h6>Forget password?</h6>
              <form >
                <p><input type="email" placeholder="Email" name="email" onChange={(event)=>handleChange(event)}/></p>
                
                <input type="submit" value="Reset Password" className='resetpassbtn' onClick={sendOtp}/>
              </form>


                </div>

            </div>
        </div>

        </div>
        
    </section>
  )
}
