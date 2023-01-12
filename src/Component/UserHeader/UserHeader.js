import React from 'react';
import './UserHeader.css'

export default function UserHeader() {
  return (
    <section>
      <div className='more-size'>
        <div className='tophead'>
          <div className='lefthead'>
            <img src='/images/logo.png'></img>
          </div>
          <div className='centerhead'>
           <input type="search" id="prosearch" name="prosearch" />

          </div>
          <div className='righthead'>
            <img src='/images/myprofile.png'></img>
            <img src='/images/bag.png'></img>
            <button type="logbtn">Logout</button>


          </div>
        </div>
        <div>
          
          
        </div>
      </div>
    </section>
  )
}

