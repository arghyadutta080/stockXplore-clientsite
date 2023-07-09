import React, { useState } from 'react'
import SignContext from './SignContext'
import data2 from '../data/data2';


const StockState = (props) => {
    const [modal , setModal] = useState(false)
    
    const [stockInfo, setStockInfo] = useState(data2);
    const handleModal = () => {
      setModal(true) ;
    }
    
    

    const handleClose = (e)=>{
      if(e.target.id==='container' || e.target.id === 'close'){
        setModal(false);
      //  setSign(true);
        
      }
      
    }
  return (
    <SignContext.Provider value={{modal , handleModal , stockInfo , setStockInfo , handleClose}}>
        {props.children}
    </SignContext.Provider>
  )
}

export default SignState