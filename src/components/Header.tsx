import React, { useState,useContext } from 'react'
import { AppContext } from '../App'
import { BiBook } from 'react-icons/bi'
import { BsSun, BsMoon } from 'react-icons/bs'
const Header = () => {
  const {thema, setThema} =  useContext(AppContext)
  return (
    <div className='header'>
      <div className='logo'>
        <BiBook />
      </div>
      <div className='nav'>
        <select
          name=''
          id=''
          style={thema?{color:'#fff'}:{}}
        >
          <option value='Serif'>Serif</option>
          <option value='Sans'>Sans</option>
        </select>
        <div className='check'>
        <div className='icon'>{thema ? <BsSun /> :null }</div>
          <div className='btn'>
            <button 
            onClick={() => setThema(!thema)}
            style={thema?{backgroundColor:'#fff'}:{}}
             
            >
              <span
                style={
                  thema
                    ? { transform: 'translateX(35px)',backgroundColor:'#000000'  }
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
