import React from 'react'
import Pannel from '../components/Pannel/Pannel'
import Sidebar from '../components/SideBar/Sidebar'
const Dashboard = (panel) => {
  return (
    <div className='h-screen flex flex-col justify-end'>
       <div className=' flex h-full pt-16 '>
       <Sidebar />  
       <Pannel panel={panel}/>  
      </div>
    </div>
  )
}

export default Dashboard
