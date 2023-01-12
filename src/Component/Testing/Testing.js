import React from 'react';
import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';


export default function Testing() {
   
  const [store, setStore]= useState(10);
  const [count, setCount]= useState(10);


  const multiCountValue=useMemo(
    function multiCount(){
      console.log("multiCount")
      return store*5
      
    },[store]
  )
  
  
 
   
  return (
    <div>
      
      
        <div>
          
          <h1>{store}</h1>
          <h2>{count}</h2>
          <h2>{multiCountValue}</h2>
          <button onClick={()=>setStore(store+1)}>Store</button>
          <button onClick={()=>setCount(count*10)}>count</button>
                             
        </div>
    </div>
  )
}
