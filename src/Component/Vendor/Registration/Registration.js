import React, { useState } from "react";
import "./Registration.css"

export default function Registration() {
    
    const [data,setData] = useState({
        fname:"",
        lname:"",
        businessname:"",
        contactnumber:"",
        email:"",
        address1:"",
        address2:"",
        city:"",
        state:"",
        zipcode:"",
        typebusiness:""

    })

    const handleChange=(event)=>{
        let {value,name} = event.target
        setData((pre)=>{
             pre = {...pre,[name]:value}
          
            return pre
        })
    }
   
    function getFormData(e){
        console.warn(data)
      e.preventDefault()
    }

  return (
    <section>
      <div className="vendorregistration">
        <div className="vregisterbox">
          <div>
            <h1>Business registration</h1>
          </div>
          <div>
            <div className="row">
              <form id="vendorregform" onSubmit={getFormData}>
                <h6>Business Owner*</h6>
                <div className="vregisterform">
                  <p><input type="text" placeholder="First Name" name="fname" onChange={(event)=>handleChange(event)}/></p>
                  <p><input type="text" placeholder="Last Name" name="lname" onChange={(event)=>handleChange(event)} /></p>
                  <p><input type="text" placeholder="Business Name" name="businessname" onChange={(event)=>handleChange(event)}/></p>
                  <p><input type="number" placeholder="Contact Number" name="contactnumber" onChange={(event)=>handleChange(event)} /></p>
                  <p><input type="email" placeholder="Email" name="email" onChange={(event)=>handleChange(event)}/></p>
                </div>
                <h6>Address**</h6>
                <div className="vregisterform">
                <p><input type="text" placeholder="Street Address" name="address1" onChange={(event)=>handleChange(event)} /></p>
                <p><input type="text" placeholder="Street Address 2" name="address2" onChange={(event)=>handleChange(event)} /></p>
                <p><input type="text" placeholder="city" name="city" onChange={(event)=>handleChange(event)} /></p>
                <p><input type="text" placeholder="State" name="state" onChange={(event)=>handleChange(event)}/></p>
                <p><input type="text" placeholder="Zip Code" name="zipcode" onChange={(event)=>handleChange(event)} /></p>
                <p><input type="text" placeholder="State" /></p>
                </div>
                <h6>Type Of Business*</h6>
                <div className="vregisterform">
                <p><input type="text" placeholder="Type Of Business" name="typebusiness" onChange={(event)=>handleChange(event)}/></p>

                <p><input type="text" placeholder="State" /></p>
                </div>
                <input type="submit" value="Submit"/>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
