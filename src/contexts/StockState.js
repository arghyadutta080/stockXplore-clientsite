import React, { useState } from 'react'
import StockContext from './StockContext';
import StockData from '../data/StockData';


const StockState = (props) => {
  const [modal, setModal] = useState(false)
  const [user, setUser] = useState(false);
  const [userInfo, setUserInfo] = useState([]);
  const [stockInfo, setStockInfo] = useState(StockData);
  const [stockName, setStockName] = useState('stock symbol');
  const [currentStockPrice, setCurrentStockPrice] = useState(0);
  const [currency, setCurrency] = useState('');
  const [companyName, setCompanyName] = useState('company name');

  const handleModal = () => {
    setModal(true);
  }

  const handleClose = (e) => {
    if (e.target.id === 'container' || e.target.id === 'close') {
      setModal(false);
    }
  }

  return (
    <StockContext.Provider value={{ modal, handleModal, user, setUser, stockInfo, setStockInfo, handleClose, userInfo, setUserInfo, stockName, setStockName, currentStockPrice, setCurrentStockPrice, currency, setCurrency, companyName, setCompanyName }}>
      {props.children}
    </StockContext.Provider>
  )
}

export default StockState;