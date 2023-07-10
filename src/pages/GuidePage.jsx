import React, { useState , useContext } from 'react'
import Symbols from '../data/SymbolData'
import { FaSearch } from 'react-icons/fa'
import StockContext from '../contexts/StockContext';
import Modal from '../components/authentication/Modal';


const GuidePage = () => {
  const s = useContext(StockContext);
  const modal = s.modal;
    const [search  , setSearch] = useState('');
  return (
    <>
    <div className='flex items-center justify-center '>
   
          <h1 className=" min-[280px]:text-base min-[360px]:text-2xl  md:text-4xl font-bold text-center min-[360px]:mb-4 text-white absolute top-[12vh] min-[1080px]:top-[12vh] lg:top-[20vh] xl:top-[20vh] 2xl:top-[12vh]">
            Predict Stock Price for Any Company Now !
          </h1>
          <div className=" w-full  flex flex-row justify-center mt-16 items-center content-center text-center z-10 absolute top-[15vh] min-[1080px]:top-[15vh] lg:top-[22vh] xl:top-[20vh] 2xl:top-[15vh] m-auto">
            <input
            value={search}
            onChange={(e)=>{setSearch(e.target.value)}}
              type="text"
              className="text-white text-xl md:text-2xl h-10 min-[280px]:w-[70%] md:pl-4 md:h-14 md:w-[50%] min-[1080px]:w-[60%] xl:w-[50%] bg-transparent border-4 border-blue-400 rounded-lg"
            />
            <button className="ml-4 p-2 md:p-4 border-2 rounded-lg hover:bg-white hover:bg-opacity-40 hover:text-black ">
              <FaSearch  className="text-white min-[360px]:h-[25px] min-[360px]:w-[25px]" />
            </button>
          </div>
        
        <div className='relative top-[30vh]'>
        <table className="text-white mt-5 shadow-2xl bg-[rgba(22,21,21,0.28)] border border-spacing-2 min-[280px]:w-[250px] min-[360px]:w-[340px] md:w-[360px] md:font-semibold min-[900px]:w-[380px]  min-[900px]:text-xl lg:w-[600px] min-[1080px]:text-3xl   xl:text-base 2xl:w-[750px] border-seperate border-slate-500">
        <caption class="caption-top text-lg font-bold pb-1 min-[900px]:text-xl min-[1080px]:text-3xl xl:text-xl mb-2">
          Table : Company Name & Stock Symbols
        </caption>
        <thead>
          <tr className="bg-slate-700 hover:">
            <th className="border border-slate-600 py-4">Company Name</th>
            <th className="border border-slate-600">Stock Symbol</th>
          </tr>
        </thead>
        <tbody>
        {
  Symbols.filter((company)=>{
    return search.toLowerCase() === '' ? company : company.name.toLowerCase().includes(search);
  }).map((company, key) => (
    <tr key={key} className="text-center text-white cursor-pointer duration-300 hover:bg-slate-800">
      <td className="py-1">{company.name}</td>
      <td>{company.symbol}</td>
    </tr>
  ))
}

        </tbody>
      </table>
        </div>
    
        {modal ? <Modal /> : null}
    </div>
    </>
  )
}

export default GuidePage