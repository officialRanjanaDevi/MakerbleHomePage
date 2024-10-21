import React from 'react'
import Pannel from '../components/Pannel/Pannel'
import Sidebar from '../components/SideBar/Sidebar'
const Dashboard = (panel) => {
  return (
    <div className='h-[90vh] flex justify-end'>
       
       <Sidebar />  
       <Pannel panel={panel}/>  
   
    </div>
  )
}

export default Dashboard
