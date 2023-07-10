import React, { useContext } from 'react'
import TeamCard from '../components/TeamCard'
import TeamData from '../data/TeamData' ; 
import StockContext from '../contexts/StockContext';
import Modal from '../components/authentication/Modal';
const Team = () => {
  const s = useContext(StockContext) ;
   const modal = s.modal ;
  return (
    <>
    <div className='flex flex-col items-center'>
        <h1 className='text-4xl text-center text-white absolute top-[15vh] font-bold  '>Meet Our Team</h1>
        <h1 className='text-3xl text-center text-gray-400 font-semibold top-[22vh] absolute hover:scale-105'>DataDynamos</h1>
    <div className='absolute top-[30vh] flex-col flex-wrap flex md:flex-row  justify-center text-center items-center md:gap-x-10 2xl:space-x-10'>
        
        {
            TeamData.map(( member)=>{
                return(
                    <TeamCard key={member.id} name={member.name} photo={member.photo} role={member.role} devfolio = {member.devfolio} github={member.github} linkedin={member.linkedin} />
                )
            })
         }
            
    
    </div>
    </div>
    {modal ? <Modal /> : null}
    
    </>
  )
}

export default Team