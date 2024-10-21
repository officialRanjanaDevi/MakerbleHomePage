import React from 'react'
import images from '../../assets/images';
const Board = () => {
  const boardArray = [
    {
      name: "All Hubs",
      profile:`${images.album2}`,
    },
    {
      name: "Alpha- Attendance record",
      profile:`${images.album1}`,
    },
    {
      name: "One Team-Outcome star",
      profile:`${images.album4}`,
    },
    {
      name: "Success Record",
      profile:`${images.album3}`,
    },
    {
      name: "Mind games",
      profile:`${images.album5}`,
    },
    {
      name: "Group Discussion",
      profile:`${images.album6}`,
    },
    {
      name: "Brainstorming detail",
      profile:`${images.album7}`,
    },
    {
      name: "Mind record",
      profile:`${images.album8}`,
    },
    {
      name: "Training result",
      profile:`${images.album5}`,
    },
    {
      name: "Beta-Attendance sheet",
      profile:`${images.album2}`,
    }
  ];
  

  return (
    <div className="bg-neutral-100 h-full mr-1 flex flex-col justify-between items-center rounded-lg p-2 w-full text-center">
      <h1 className=" font-bold text-center text-lg mb-4">Boards</h1>

      <div className='grid lg:grid-cols-2 max-h-[90%] gap-4 gap-y-8 px-4 overflow-y-scroll w-full'>
        {boardArray.map((contact,index)=>(
          <div key={index} className='flex text-start'>
            <img src={contact.profile} className=' w-20  h-full rounded-md'></img>
            <div className='ml-4  w-full lg:w-4/6 p-2'>
            <h2 className='font-bold'>{contact.name}</h2>
           
          
            
          </div>
          
          </div>
        ))}
      
      </div>
      <button className=' py-1 bg-orange-500 mt-2 px-3 w-fit rounded-md text-white hover:bg-orange-400 hover:scale-110 duration-700'>Add New Board</button>
  </div>
  )
}

export default Board
