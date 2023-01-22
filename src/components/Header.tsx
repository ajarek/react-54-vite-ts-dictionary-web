import React, { useState } from 'react'
import { BiBook } from 'react-icons/bi'
import { BsSun, BsMoon } from 'react-icons/bs'
const Header = () => {
  const [thema, setThema] = useState(false)
  return (
    <div className='header'>
      <div className='logo'>
        <BiBook />
      </div>
      <div className='nav'>
        <select
          name=''
          id=''
        >
          <option value='Serif'>Serif</option>
          <option value='Sans'>Sans</option>
        </select>
        <div className='check'>
        <div className='icon'>{thema ? <BsSun /> :null }</div>
          <div className='btn'>
            <button onClick={() => setThema(!thema)}>
              <span
                style={
                  thema
                    ? { transform: 'translateX(35px)' }
                    : { transform: 'translateX(0px)' }
                }
              ></span>
            </button>
          </div>
          <div className='icon'>{thema ? null : <BsMoon />}</div>
        </div>
      </div>
    </div>
  )
}

export default Header
