import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';

export default function Testingroute() {
    const params= useParams();
    const {name} =params;
   const location = useLocation();
   console.log(location)



  return (
    <div>
        <div>
            <h1>The user name is: {name}</h1>
            <ul>
                <li>
                    <Link to="/testroute/aman">aman </Link>
                </li>
                <li>
                    <Link to="/testroute/rishabh">rishabh</Link>
                </li>
            </ul>
        </div>
        <div>
            <h1>hkjsdhfhf</h1>
        </div>
    </div>
  )
}
