import  { useContext } from 'react'
import { Link } from 'react-router-dom'
import BgVideo from '../assets/videos/earth.mp4'
import StockContext from '../contexts/StockContext'
import person from '../assets/photos/person.png'
import { TypeAnimation } from 'react-type-animation';
import Modal from './authentication/Modal'

const Video = () => {
  const s = useContext(StockContext) ;
   const modal = s.modal ;
   
   
  return (
    <div className='absolute top-0 w-[100%] h-[100vh] '>
      <video src={BgVideo} autoPlay muted loop className='w-[100%] h-[100%] object-cover z-[-1]' />
     <div className='flex flex-col w-[100%]  absolute object-contain h-[100%] top-[40vh] text-center items-center content-center m-auto'>
        <h1 className=' font-bold  text-white text-5xl'>
        <TypeAnimation
      sequence={[
        
        'Stock Price Prediction',
        1000, 
        'Upcoming 30 Days Each Predicted',
        1000,
      ]}
      wrapper="span"
      speed={10}
      style={{  display: 'inline-block' }}
      repeat={Infinity}
    />
        </h1>
        <Link to='/main'><button className='text-white text-2xl p-4 border my-4 font-bold rounded-md hover:bg-white hover:text-black hover:bg-opacity-50'>Get Started</button></Link>
        
     </div>
     {modal ? <Modal /> : null}
     
    </div>
  )
}

export default Video