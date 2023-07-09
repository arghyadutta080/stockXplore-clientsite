import React, { useState } from 'react'
import SignUp from './SignUp';
import Login from './Login';

const Modal = () => {
    const [ sign , setSign ] = useState(true)
  return (
    <>
    {
        sign ? <Login  setSign={setSign}  /> : <SignUp  setSign={setSign} />
    }
    </>
  )
}

export default Modal ;