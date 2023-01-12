import React, { useState } from "react";
import { Base_url } from "../env";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

export default function Resetpassword() {
  const {state} = useLocation();
  const email = state?.email;
  console.log("email", email);



  const url = Base_url;
  const navigate = useNavigate();
  const [resetpassword, setResetpassword] = useState({
    newpassword: "",
    confirmpassword: ""
  })

  const handleChange = (e) => {
    // let {value,name} = e.target;

    setResetpassword({ ...resetpassword, [e.target.name]: e.target.value });
  }

  

  function getResetPassword(e) {
    e.preventDefault();
    if (resetpassword.newpassword === resetpassword.confirmpassword) {
      alert("password match");
      let payload = {
        email: email,
        password: resetpassword.newpassword
        
      }

      axios
        .post(url+"/resetPassword", payload)
        .then((prachi) =>{
          console.log(prachi)
          navigate("/Vendor/login")
        }
        
          )
          
         
          
        .catch(
          (err) => {console.log(err)}
        )
      
    }
  }
  return (
    <section className="forgetpass">
      <div className="more-size">
        <div className="forgetbox">
          <div className="forleft">
            <img src="/images/forget-password.png" />
          </div>
          <div className="forright">
            <div className="forfrm">
              <h6>Forget password?</h6>
              <form id="signupform" onSubmit={getResetPassword}>
                <p>
                  <input
                    type="password"
                    placeholder="New Password"
                    name="newpassword"
                    onChange={(event) => handleChange(event)}
                  />
                </p>
                <p>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    name="confirmpassword"
                    onChange={(event) => handleChange(event)}
                  />
                </p>

                <input
                  type="submit"
                  value="Reset Password"
                  className="resetpassbtn"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
