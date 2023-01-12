import React, { useState } from 'react';
import './Login.css';
import { Base_url } from '../env';
import axios from 'axios';
import { json, useNavigate } from 'react-router-dom';


export default function Login() {
  const navigate = useNavigate();
  const url=Base_url
  const [logindata, setLoginData]=useState({
    email: "",
    password: ""
  })

  const handleChange=(event)=>{
    let {value,name} = event.target;
    setLoginData((pre)=>{
         pre = {...pre,[name]:value}
      
        return pre
    })
}

  function getLoginData(e){
    e.preventDefault()
    let payload= {
      roles: "Vendor",
      email: logindata.email,
      password: logindata.password
    }
   axios.post(url+"/login", payload)
   .then((val) => {
    if(val.data.token){
      localStorage.setItem("token",JSON.stringify(val.data.token));
      localStorage.setItem("refresh", val.data.refresh);
      navigate('/myprofile')
    }
    localStorage.setItem("vendordata", JSON.stringify(payload))

   })
   .catch("something went wrong")
   
    
  }

  return (
    <section>
      <div className="loginfull">
        <div className="loginbox">
          <div>
            <h1>Login</h1>
          </div>
          <div>
            <div className="row">
              <form id="loginform" onSubmit={getLoginData}>
                <div className="loginfrm">
                
                <p><input type="email" placeholder="Email" name="email" onChange={(event)=>handleChange(event)}/></p>
                
                <p><input type="password" placeholder="Password" name="password" onChange={(event)=>handleChange(event)}/></p>

                <h6 className='forgetpaswrd'>Forget password?</h6>
                <input type="submit" value="Login" className='signsubmit'/>


                </div>
                
              </form>
              <hr></hr>
                <h5 className='signlog'>I dont have an account on review & rate <a>Register Now</a></h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
