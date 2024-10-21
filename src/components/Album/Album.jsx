import React from 'react'
import AlbumCard from './AlbumCard';
import images from '../../assets/images';

const Album = () => {
  const albumArray = [
    {
      projects: ["project1", "project2", "project3"],
      colleagues: ["karan", "shewta", "rohan", "richa"],
      contacts: ["rahul", "sudhir"],
      name: "All Hubs",
      logo:`${images.album1}`,
    },
    {
      projects: ["projectA", "projectB", "projectC"],
      colleagues: ["karan", "deepak", "anjali", "rohan"],
      contacts: ["manoj", "rahul"],
      name: "Tech Innovators",
      logo:`${images.album2}`,
    },
    {
      projects: ["Alpha", "Beta", "Gamma"],
      colleagues: ["shewta", "rohan", "pankaj", "devika"],
      contacts: ["sudhir", "divya"],
      name: "Creative Minds",
      logo:`${images.album3}`,
    },
    {
      projects: ["Website Redesign", "Mobile App", "API Integration"],
      colleagues: ["meera", "karan", "rohit", "anjali"],
      contacts: ["neha", "rahul"],
      name: "Digital Pioneers",
      logo:`${images.album4}`,
    },
    {
      projects: ["Marketing Campaign", "Product Launch", "SEO Optimization"],
      colleagues: ["priyanka", "richa", "aditya", "karan"],
      contacts: ["sneha", "manoj"],
      name: "Market Leaders",
      logo:`${images.album5}`,
    },
    {
      projects: ["Cloud Migration", "Data Analysis", "Security Upgrade"],
      colleagues: ["arjun", "devika", "nikhil", "shivani"],
      contacts: ["tanmay", "rahul"],
      name: "Tech Titans",
      logo:`${images.album6}`,
    },
    {
      projects: ["E-commerce Platform", "CRM System", "Customer Support Portal"],
      colleagues: ["lakshmi", "ankit", "karan", "rekha"],
      contacts: ["anup", "surbhi"],
      name: "Customer First",
      logo:`${images.album7}`,
    },
    {
      projects: ["AI Model Training", "Chatbot Integration", "Data Visualization"],
      colleagues: ["vimal", "reema", "karan", "isha"],
      contacts: ["tushar", "geetika"],
      name: "Future Labs",
      logo:`${images.album8}`,
    }
  ];
  
  return (
    
     <div className='bg-neutral-100 h-full mr-1 rounded-lg p-2 flex flex-col items-center'>
      <h1 className='text-center font-bold text-lg'>Album</h1>
      <div className='overflow-y-scroll h-[95%] grid  justify-center sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-4'>
      {
        albumArray.map((info, index) => (
          <AlbumCard key={index} data={info} />
        ))
      }
      </div> 
      <button className=' py-1 bg-red-600 mt-2 px-3 w-fit rounded-md text-white hover:bg-red-500 hover:scale-110 duration-700'>Add New Album</button>
    </div>

    
   
  )
}

export default Album
