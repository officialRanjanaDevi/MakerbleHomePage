import React from 'react'
import NewsCard from './NewsCard'
import images from '../../assets/images'
const Newsfeed = () => {
  // Create an array of 10 items for mapping
  const newsArray = [
   
    {
      profile:`${images.user4}`,
      name: "Riya Sen",
      postedAt: "10:30am",
      postedOn: "11 Oct 2024",
      editedAt: "12pm 11 Oct 2024",
      status: "update",
      project: "Sample Project 2",
      event: "Event number 2",
      description: "New event announcement for project 2."
    }, {
      profile:`${images.user1}`,
      name: "Karan Nag",
      postedAt: "11:59am",
      postedOn: "12 Oct 2024",
      editedAt: "",
      status: "update",
      project: "Sample Project 1",
      event: "Event number 1",
      description: "This is a short description of the news."
    },
    {
      profile:`${images.user2}`,
      name: "Aman Verma",
      postedAt: "9:45am",
      postedOn: "10 Oct 2024",
      editedAt: "10am 10 Oct 2024",
      status: "update",
      project: "Sample Project 3",
      event: "Event number 3",
      description: "Project update for sample project 3."
    },
    {
      profile:`${images.user3}`,
      name: "Sofia",
      postedAt: "8:15am",
      postedOn: "9 Oct 2024",
      editedAt: "9am 9 Oct 2024",
      status: "update",
      project: "Sample Project 4",
      event: "Event number 4",
      description: "This is a brief about the new updates."
    },
    {
      profile:`${images.user1}`,
      name: "Vikram Singh",
      postedAt: "2:00pm",
      postedOn: "8 Oct 2024",
      editedAt: "3pm 8 Oct 2024",
      status: "update",
      project: "Sample Project 5",
      event: "Event number 5",
      description: "News related to event 5 of project 5."
    },
    {
      profile:`${images.user3}`,
      name: "Neha Gupta",
      postedAt: "4:00pm",
      postedOn: "7 Oct 2024",
      editedAt: "4:30pm 7 Oct 2024",
      status: "update",
      project: "Sample Project 6",
      event: "Event number 6",
      description: "New event details for project 6."
    },
    {
      profile:`${images.user2}`,
      name: "Ravi Kumar",
      postedAt: "3:00pm",
      postedOn: "6 Oct 2024",
      editedAt: "3:30pm 6 Oct 2024",
      status: "update",
      project: "Sample Project 7",
      event: "Event number 7",
      description: "Update related to project 7 event 7."
    },
    {
      profile:`${images.user4}`,
      name: "Priya Jain",
      postedAt: "12:00pm",
      postedOn: "5 Oct 2024",
      editedAt: "1pm 5 Oct 2024",
      status: "update",
      project: "Sample Project 8",
      event: "Event number 8",
      description: "Short description about project 8 event."
    },
    {
      profile:`${images.user4}`,
      name: "Anjali Patel",
      postedAt: "8:00am",
      postedOn: "3 Oct 2024",
      editedAt: "9am 3 Oct 2024",
      status: "update",
      project: "Sample Project 10",
      event: "Event number 10",
      description: "Update regarding project 10 and event 10."
    },
    {
      profile:`${images.user1}`,
      name: "Rahul Mehra",
      postedAt: "6:00pm",
      postedOn: "4 Oct 2024",
      editedAt: "7pm 4 Oct 2024",
      status: "update",
      project: "Sample Project 9",
      event: "Event number 9",
      description: "New update about project 9 event."
    },
   
  ];
  

  return (
    <div className='bg-neutral-100 h-full mr-1 rounded-lg p-2 flex flex-col items-center'>
      <h1 className='text-center font-bold text-lg'>Newsfeed</h1>
     <div className='overflow-y-scroll h-[90%] grid grid-cols-1 xl:grid-cols-2 gap-6 p-4'>
      {
        newsArray.map((news, index) => (
          <NewsCard key={index} data={news} />
        ))
      }
      </div> 
      <button className=' py-1 bg-red-500 mt-2 px-3 w-fit rounded-md text-white hover:bg-red-400 hover:scale-110 duration-700'>Share Latest News</button>
     
    </div>
  )
}

export default Newsfeed
