import React, { useState } from 'react';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
const Task = () => {
  const [taskArr, setTaskArr] = useState([
    "test young players",
    "make football team",
    "select candidates for cricket team"
  ]);

  const [newTask, setNewTask] = useState(""); 

  const handleAddTask = (e) => {
    e.preventDefault(); 

    if (newTask.trim()) { 
      setTaskArr([...taskArr, newTask]); 
      setNewTask(""); 
    }
  };

  return (
    <div className='bg-neutral-100 h-full mr-1 rounded-lg p-2'>
      <h1 className='text-center font-bold text-xl'>Tasks</h1>
      <form onSubmit={handleAddTask} className='flex justify-center mt-4'>
        <input 
          type='text' 
          className='rounded-full w-1/2 py-1 px-4 border-2 border-black' 
          placeholder='add new task'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)} 
        />
        <button className='px-4 bg-fuchsia-600 hover:bg-fuchsia-700 text-white rounded-full ml-2'>Add</button>
      </form>
      <div className='mt-4 grid md:grid-cols-2 gap-4'>
        {
          taskArr.map((task, index) => (
            <div key={index} className='border-2 border-neutral-300 p-4 rounded-md flex justify-between'>
             
            <p >{task}</p>
            <div>
            <CheckBoxOutlineBlankOutlinedIcon className='text-lime-600'/>
            <SettingsOutlinedIcon className='text-sky-600' /> </div>
              </div>
         
          ))
        }
      </div>
    </div>
  );
}

export default Task;
