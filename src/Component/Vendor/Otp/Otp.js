import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Base_url } from '../env';

export default function Otp() {
 const {state} = useLocation();
 const email = state?.email;
 console.log(state?.email);

  const navigate = useNavigate();
  const url=Base_url
  const [otp, setOtp]=useState('')

  const handleChange=(e)=>{
    // let {value,name} = e.target;
    setOtp(e.target.value)
  }

    function getOtp(e){
         e.preventDefault()
        alert("check")
        let payload={
          email: state?.email,
          otp: Number(otp)
        }
        axios.post(url+"/verifyOtp", payload )
       .then((response)=>{
        // console.log(response);
        // debugger
        if(response.data.msg === "otp verified")
        {
          navigate("/resetpassword", {state:{"email": email}})
        }
       }
        
       )
       .catch((err) => {console.log(err);})
      }
  return (
    <section className='forgetpass'>
        <div className='more-size'>
        <div className='forgetbox'>
            <div className='forleft'>
                <img src='/images/forget-password.png' />

            </div>
            <div className='forright'>
            <div className="forfrm">
              <h6>otp password?</h6>
              <form id="signupform" onSubmit={getOtp}>
                
                <p><input type="number" placeholder="OTP" name="otp" onChange={(event) => {handleChange(event)}}/></p>
                
                {/* <input type="submit" value="Reset Password" className='resetpassbtn' /> */}
                <button type="submit" className='resetpassbtn'>
                Reset Password
                </button>
                </form>


                </div>

            </div>
        </div>

        </div>
        
    </section>
  )
}
