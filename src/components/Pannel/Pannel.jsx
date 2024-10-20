import React from 'react'
import Home from '../Home/Home.jsx'
import Album from '../Album/Album.jsx'
import Board from '../Board/Board.jsx'
import Contact from '../Contact/Contact.jsx'
import Event from '../EventBox/Event.jsx'
import Follow from '../Follow/Follow.jsx'
import Organization from '../Organization/Organization.jsx'
import PersonalProgress from '../PersonalProgress/PersonalProgress.jsx'
import Project from '../Project/Project.jsx'
import Task from '../Task/Task.jsx'
const Pannel = (props) => {
    const {panel}=props.panel;
    console.log(panel)
    return (
    <div className=' w-full h-full rounded-md px-2 pb-2'>
        {panel==='home'&&<Home/>}
        {panel==='album'&&<Album/>}
        {panel==='board'&&<Board/>}
        {panel==='contact'&&<Contact/>}
        {panel==='event'&&<Event/>}
        {panel==='follow'&&<Follow/>}
        {panel==='organization'&&<Organization/>}
        {panel==='personalprogress'&&<PersonalProgress/>}
        {panel==='project'&&<Project/>}
        {panel==='task'&&<Task/>}
      
    </div>
  )
}

export default Pannel
