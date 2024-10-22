import React from 'react'
import Album from '../Album/Album.jsx'
import Board from '../Board/Board.jsx'
import Contact from '../Contact/Contact.jsx'
import Event from '../EventBox/Event.jsx'
import Follow from '../Follow/Follow.jsx'
import Organization from '../Organization/Organization.jsx'
import PersonalProgress from '../PersonalProgress/PersonalProgress.jsx'
import Project from '../Project/Project.jsx'
import Task from '../Task/Task.jsx'
import Newsfeed from '../Newsfeed/Newsfeed.jsx'
const Pannel = (props) => {
    const {panel}=props.panel;
   
    return (
    <div className=' w-full md:w-5/6 h-full'>
        {panel==='news'&&<Newsfeed/>}
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
