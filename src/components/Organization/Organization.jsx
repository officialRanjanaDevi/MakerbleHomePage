import React from "react";
import images from "../../assets/images";
import SettingsIcon from '@mui/icons-material/Settings';
const Organization = () => {
  const organizationArray = [
    {
      logo: `${images.album5}`,
      organization: "Organization Alpha",
      post:"Admin"
    },
    {
      logo: `${images.album2}`,
      organization: "Organization Beta",
      post:"Member"
    },
    {
      logo: `${images.album8}`,
      organization: "Organization Gamma",
       post:"Admin"
    },
    {
      logo: `${images.album7}`,
      organization: "Organization Delta",
        post:"Member"
    },
    {
      logo: `${images.album6}`,
      organization: "Organization Epsilon",
       post:"Admin"
    },
    
  ];
  return (
    <div className="bg-neutral-100 h-full mr-1 rounded-lg p-2 ">
      <h1 className=" font-bold text-center text-lg mb-4">Organizations</h1>
      <div className="overflow-y-scroll h-[94%] grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 xl:grid-cols-5 gap-6 p-4">
        {
          organizationArray.map((organization,index)=>(
            <div key={index} className="border-2 border-neutral-300 rounded-md h-fit relative hover:scale-105 hover:duration-700">
              <img src={organization.logo} className="h-40 w-full rounded-t-md"></img>
               <h2 className="text-center font-bold pt-2">{organization.organization}</h2>
               <h2 className="text-center text-sm text-neutral-500 ">{organization.post}</h2>
               
               {organization.post==="Admin"?<SettingsIcon className="text-sky-600 absolute top-1 right-1"/>:""}
            </div>
          ))
        }
      </div>
    </div>
  );
};

export default Organization;
