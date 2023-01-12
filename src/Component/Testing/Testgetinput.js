import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';

export default function Testgetinput() {
    const [data, setData]=useState(null)
    const [print, setPrint]=useState(false)

   
function getdata(val){
    val.preventDefault();
 console.log(val.target.value);
 setData(val.target.value)
 setPrint(false)
 
}
const submit=(val)=>{
    val.preventDefault();
     setPrint(true);
}

// hide/show
const [status, setStatus]=useState(true);

//handle form
const [name, setName]=useState();
const [email, setEmail]=useState();
const [interest, setInterest]=useState();
const [tnc, setTnc]=useState(false);
function getFormData(e){
 e.preventDefault();
 console.warn(name, email, interest, tnc)

}


//If/elseif/ else
const [loggedin, setLoggedin]=useState(2);
//1,2,3


{/* useEffect Hooks */}
const [count, setCount]=useState(0);
const [list, setList]=useState(10)
useEffect(()=>{
    console.log("Show Effect")
}, [list])


{/* map function */}
const students= ['aman', 'ajay', 'rishabh', 'harsh'];
// students.map((para)=>{
//     console.log(para)
// })

const studentarray=[
    {name: 'anil', email:'anil@gmail.com', contact: 1523698745}
]

const location = useLocation();
console.log(location)

  return (
    <div>
        {/* Get Input Box value */}
        <form onSubmit={submit}>
            {
                print?
                <h1>{data}</h1>
                :null
            }
            
            <input type="text" onChange={getdata}/>
            
            <button type='Submit'>Submit</button> 
        </form>
        <hr />

        {/* Hide/Show/Toggle */}
        <div>
            {
               status?
               <h1>Hello World</h1>
               :null 
            }
            <button onClick={()=>setStatus(!status)}>Toggle</button>
            <button onClick={()=>{setStatus(false)}}>Hide</button>
            <button onClick={()=>{setStatus(true)}}>Show</button>
        </div>
        <hr />

        {/* Handle Form */}
        <form onSubmit={getFormData}>
            <input type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)}/>
            <br/>
            <input type="email" placeholder='Email' onChange={(e)=>setEmail(e.target.value)}/><br/>
            <select onChange={(e)=>setInterest(e.target.value)}>
                <option>Comedy</option>
                <option>Marvel</option>
                <option>Romantic</option>
            </select><br/>
            <input type="checkbox" name="topping" onChange={()=>setTnc(true)}/><span>Accept Term and condition</span><br/>
            <button type="submit">Submit</button>
        </form>
        <hr />

        {/* If/elseif/ else-- conditional rendering */}
        <div>
            {
                loggedin==1?
                <h1>Welcome User 1</h1>
                :loggedin==2?
                <h1>Welcome User 2</h1>
                :<h1>Welcome User 3</h1>
            }

        </div>
        <hr />

         {/* useEffect Hooks */}
         <div>
            <h1>{count+1}</h1>
            <button onClick={()=>setCount(count+1)}>Submit</button>
            <button onClick={()=>setList(list+1)}>View</button>
         </div>
         <hr />

         {/* map function */}
         <div>
            <h1>dsmsnv</h1>
            {
                students.map((paras,i)=>
                    <h1 key={i}>Name is: {paras}</h1>
                )
            }
            {
                studentarray.map((item, id)=><h1 key={id}>{item.name}, {item.email}, {item.contact}</h1>)
            }
         </div>
         <hr />


    </div>
  )
}

