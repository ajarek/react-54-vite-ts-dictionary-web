import React from 'react'
import { SlMagnifier } from 'react-icons/sl'

type Props = {
  value: string,
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({value, onChange}:Props) => {
  return (
    <div className='input'>
      <input
        type='text'
        name=''
        id=''
        value={value}
        onChange={onChange}
      />
      <div className='icon'>
        <SlMagnifier />
      </div>
    </div>
  )
}

export default Input
