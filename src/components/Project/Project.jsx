import React from "react";
import images from "../../assets/images";
import SettingsIcon from '@mui/icons-material/Settings';
const Project = () => {
  const projectArray = [
    {
      logo: `${images.project1}`,
      project: "Project Alpha",
    },
    {
      logo: `${images.album8}`,
      project: "Project Gamma",
    },
    {
      logo: `${images.project2}`,
      project: "Project Beta",
    },
    
    {
      logo: `${images.album7}`,
      project: "Project Delta",
    },
    {
      logo: `${images.album6}`,
      project: "Project Epsilon",
    },
    {
      logo: `${images.album5}`,
      project: "Project Zeta",
    },
    {
      logo: `${images.album4}`,
      project: "Project Theta",
    },
    {
      logo: `${images.album2}`,
      project: "Project Eta",
    },
  
    {
      logo: `${images.album1}`,
      project: "Project Iota",
    },
    {
      logo: `${images.album3}`,
      project: "Project Kappa",
    },
  ];
  return (
    <div className="bg-neutral-100 h-full mr-1 rounded-lg p-2 flex flex-col justify-between items-center">
      <h1 className=" font-bold text-center text-lg mb-4">Projects</h1>
      <div className="overflow-y-scroll h-[90%] grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-5 gap-6 p-4">
        {
          projectArray.map((project,index)=>(
            <div key={index} className="border-2 border-neutral-300 rounded-md h-fit relative hover:scale-105 hover:duration-700">
              <img src={project.logo} className="h-40 w-full rounded-t-md"></img>
               <h2 className="text-center font-bold py-2">{project.project}</h2>
               <SettingsIcon className="text-sky-600 absolute top-1 right-1"/>
            </div>
          ))
        }
      </div>
      <button className=' py-1 bg-sky-800 mt-2 px-3 w-fit rounded-md text-white hover:bg-sky-700 hover:scale-110 duration-700'>Add New Project</button>
    </div>
  );
};

export default Project;
