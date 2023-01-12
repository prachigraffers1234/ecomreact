import React , {useState} from 'react';
import './Signup.css'
import { Base_url } from '../env';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
const url=Base_url
const navigate = useNavigate();
  const [signupfrm, setSignupForm] = useState({
    fullname: "",
    address: "",
    email: "",
    numbers: "",
    password: ""

   
  })

  const handleChange=(event)=>{
    
    let {value,name} = event.target;
    setSignupForm((pre)=>{
         pre = {...pre,[name]:value}
      
        return pre
    })
}

  function getSignupdata(e){
    let payload= {
      roles: "Vendor",
      name: signupfrm.fullname,
      address: signupfrm.address,
      email: signupfrm.email,
      mobile: Number(signupfrm.numbers),
      password: signupfrm.password
    }
   axios.post(url+"/signup", payload).then().catch()
    alert("submitted")
    e.preventDefault()
    localStorage.setItem("vendordata", payload)
    navigate("/Vendor/login")
    

  }
  
  return (
    <section>
      <div className="signupfull">
        <div className="signupbox">
          <div>
            <h1>Sign Up</h1>
          </div>
          <div>
            <div className="row">
              <form id="signupform" onSubmit={getSignupdata}>
                <div className="signup">
                <p><input type="text" placeholder="Full Name" name="fullname" onChange={(event)=>handleChange(event)}/></p>
                <p><input type="text" placeholder="Address" name="address" onChange={(event)=>handleChange(event)}/></p>
                <p><input type="number" placeholder="Phone Number" name="numbers" onChange={(event)=>handleChange(event)}/></p>
                {/* <p><input type="text" placeholder="Address" name="address" onChange={(event)=>handleChange(event)}/></p> */}
                <p><input type="email" placeholder="Email" name="email" onChange={(event)=>handleChange(event)}/></p>
                <p><input type="password" placeholder="Password"name="password" onChange={(event)=>handleChange(event)}/></p>
                <input type="submit" value="Submit" className='signsubmit' />


                </div>
                
              </form>
              <hr></hr>
                <h5 className='signlog'>I already have an account <a>Login</a></h5>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
