import React from 'react'
import { BiBookAlt } from 'react-icons/bi';
import { BsSun, BsMoon } from 'react-icons/bs';
const Header = () => {
  return (
    <div className='header'>
      <div className="logo"><BiBookAlt/></div>
      <div className="nav">
        <select name="" id="">
          <option  value="Serif">Serif</option>
          <option value="Sans">Sans</option>
        </select>
        <div className="check">
         <div className="btn">
         <button><span>o</span></button>
         </div>
         <div className="icon">
         <BsSun/>
         <BsMoon/>
         </div>

        </div>

      </div>
    </div>
  )
}

export default Header