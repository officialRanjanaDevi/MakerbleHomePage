import React from "react";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
const Event = () => {
  const eventArray = [
    {
      name: "Indoor cricket",
      start: "12 Nov 2024",
      end: "20 Nov 2024",
      manager: "Karan Nag",
      worker: ["Kiran", "Aarti"],
      guest: "Yogesh Kumar",
    },
    {
      name: "Basketball Tournament",
      start: "05 Dec 2024",
      end: "15 Dec 2024",
      manager: "Priya Malhotra",
      worker: ["Sahil", "Ritika"],
      guest: "Rajesh Sharma",
    },
    {
      name: "Coding Marathon",
      start: "01 Oct 2024",
      end: "05 Oct 2024",
      manager: "Aman Verma",
      worker: ["Sonal", "Deepak"],
      guest: "Mehak Kapoor",
    },
    {
      name: "Football League",
      start: "10 Jan 2025",
      end: "20 Jan 2025",
      manager: "Ravi Gupta",
      worker: ["Rohit", "Nisha"],
      guest: "Anil Khanna",
    },
    {
      name: "Music Festival",
      start: "15 Feb 2025",
      end: "17 Feb 2025",
      manager: "Sneha Reddy",
      worker: ["Arjun", "Riya"],
      guest: "Neha Joshi",
    },
    {
      name: "Yoga Workshop",
      start: "22 Jul 2024",
      end: "25 Jul 2024",
      manager: "Pooja Agarwal",
      worker: ["Manish", "Ishita"],
      guest: "Rahul Mehta",
    },
    {
      name: "Art Exhibition",
      start: "05 Mar 2025",
      end: "10 Mar 2025",
      manager: "Vikas Patel",
      worker: ["Sakshi", "Mohit"],
      guest: "Shreya Singh",
    },
    {
      name: "Cooking Competition",
      start: "18 Aug 2024",
      end: "20 Aug 2024",
      manager: "Divya Shah",
      worker: ["Akash", "Pallavi"],
      guest: "Kunal Jain",
    },
    {
      name: "Marathon Race",
      start: "25 Sep 2024",
      end: "30 Sep 2024",
      manager: "Nitin Rao",
      worker: ["Simran", "Ajay"],
      guest: "Rakesh Kapoor",
    },
    {
      name: "Tech Conference",
      start: "12 Nov 2024",
      end: "13 Nov 2024",
      manager: "Meera Sen",
      worker: ["Vikram", "Priya"],
      guest: "Anjali Gupta",
    },
  ];

  return (
    <div className="bg-neutral-100 h-full mr-1 rounded-lg p-2 ">
      <h1 className=" font-bold text-center text-lg">Events</h1>

      <div className="h-[95%] overflow-y-scroll w-full flex flex-col items-center  ">
        {eventArray.map((event, index) => (

          <div key={index} className="border-2 border-neutral-200 rounded-md my-4 p-2 w-5/6 px-4 relative">

            <div className="flex justify-between sm:flex-row flex-col">
              <h2 className="text-sky-600 font-bold text-xl">{event.name}</h2>
              <div className="sm:text-end text-sm text-neutral-600">
                <p><CalendarMonthOutlinedIcon sx={{ fontSize: "1rem" }} /> Start date: {event.start}</p>
                <p><CalendarMonthOutlinedIcon sx={{ fontSize: "1rem" }} /> End date: {event.end}</p>
              </div>
            </div>

            <p className="text-rose-500 font-semibold"> <ChevronRightIcon />Chief Guest :{event.guest} </p>
            <p className="font-semibold text-amber-400"><ChevronRightIcon />Managed By: {event.manager} </p>

            <div className="flex">
              <p><ChevronRightIcon /> Workers:</p>
              {event.worker.map((worker, index) => (
                <p className="mx-2">{worker}</p>
              ))}
            </div>
            
            <SettingsOutlinedIcon className="absolute bottom-2 right-2 text-sky-600" />
          </div>

        ))}
      </div>

    </div>
  );
};

export default Event;
