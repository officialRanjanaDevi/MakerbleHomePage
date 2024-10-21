import React from 'react'
import images from '../../assets/images';
const Contact = () => {
  const contactArray = [
    {
      name: "Nick",
      profile:`${images.user2}`,
      project: "Project Alpha",
      lastUpdate: "12 hrs ago"
    },
    {
      name: "Alice",
      profile:`${images.user1}`,
      project: "Project Beta",
      lastUpdate: "3 hrs ago"
    },
    {
      name: "Sneha",
      profile:`${images.user4}`,
      project: "Project Gamma",
      lastUpdate: "1 day ago"
    },
    {
      name: "Sophia",
      profile:`${images.user3}`,
      project: "Project Delta",
      lastUpdate: "2 days ago"
    },
    {
      name: "Michael",
      profile:`${images.user2}`,
      project: "Project Epsilon",
      lastUpdate: "5 hrs ago"
    },
    {
      name: "Emma",
      profile:`${images.user3}`,
      project: "Project Zeta",
      lastUpdate: "30 mins ago"
    },
    {
      name: "David",
      profile:`${images.user1}`,
      project: "Project Eta",
      lastUpdate: "6 days ago"
    },
    {
      name: "Olivia",
      profile:`${images.user4}`,
      project: "Project Theta",
      lastUpdate: "10 hrs ago"
    },
    {
      name: "James",
      profile:`${images.user1}`,
      project: "Project Iota",
      lastUpdate: "20 mins ago"
    },
    {
      name: "Mia",
      profile:`${images.user3}`,
      project: "Project Kappa",
      lastUpdate: "2 hrs ago"
    }
  ];
  

  return (
    <div className="bg-neutral-100 h-full mr-1 rounded-lg p-2 flex flex-col items-center">
      <h1 className=" font-bold text-center text-lg mb-4">Contacts</h1>

      <div className='grid lg:grid-cols-2 gap-4 gap-y-8 px-4 overflow-y-scroll w-full'>
        {contactArray.map((contact,index)=>(
          <div key={index} className='flex '>
            <img src={contact.profile} className=' w-20  h-full rounded-md'></img>
            <div className='ml-4 border-2 border-neutral-200 rounded-md w-full lg:w-4/6 p-2'>
            <h2 className='font-bold'>{contact.name}</h2>
            <p>{contact.project}</p>
            <p className='text-sm text-neutral-500'>Last update was {contact.lastUpdate}</p>
            
          </div>
          
          </div>
        ))}
      </div>
      <button className=' py-1 bg-orange-400 mt-2 px-3 w-fit rounded-md text-white hover:bg-orange-500 hover:scale-110 duration-700'>Add New Board</button>
  </div>
  )
}

export default Contact
