import React, { useState } from "react";
import NewsCard from "./NewsCard";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import images from "../../assets/images";
import "./Newsfeed.css";

const Newsfeed = () => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "60%",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    borderRadius: "1%",
    p: 4,
  };

  const [story, setStory] = useState({ name: "", project: "", event: "", description: "" });
  const [open, setOpen] = useState(false);
  const [newsArray, setNewsArray] = useState([
    {
      profile: `${images.user4}`,
      name: "Riya Sen",
      postedAt: "10:30am",
      postedOn: "11 10 2024",
      editedAt: "12pm 11 Oct 2024",
      status: "update",
      project: "Sample Project 2",
      event: "Event number 2",
      description: "New event announcement for project 2.",
      like: 45,
      comment: 7,
    },
    {
      profile: `${images.user1}`,
      name: "Karan Nag",
      postedAt: "11:59am",
      postedOn: "12 Oct 2024",
      editedAt: "",
      status: "update",
      project: "Sample Project 1",
      event: "Event number 1",
      description: "This is a short description of the news.",
      like: 80,
      comment: 6,
    },
    {
      profile: `${images.user2}`,
      name: "Aman Verma",
      postedAt: "9:45am",
      postedOn: "10 Oct 2024",
      editedAt: "10am 10 Oct 2024",
      status: "update",
      project: "Sample Project 3",
      event: "Event number 3",
      description: "Project update for sample project 3.",
      like: 100,
      comment: 11,
    },
    {
      profile: `${images.user3}`,
      name: "Sofia",
      postedAt: "8:15am",
      postedOn: "9 Oct 2024",
      editedAt: "9am 9 Oct 2024",
      status: "update",
      project: "Sample Project 4",
      event: "Event number 4",
      description: "This is a brief about the new updates.",
      like: 150,
      comment: 7,
    },
    {
      profile: `${images.user1}`,
      name: "Vikram Singh",
      postedAt: "2:00pm",
      postedOn: "8 Oct 2024",
      editedAt: "3pm 8 Oct 2024",
      status: "update",
      project: "Sample Project 5",
      event: "Event number 5",
      description: "News related to event 5 of project 5.",
      like: 190,
      comment: 10,
    },
    {
      profile: `${images.user3}`,
      name: "Neha Gupta",
      postedAt: "4:00pm",
      postedOn: "7 Oct 2024",
      editedAt: "4:30pm 7 Oct 2024",
      status: "update",
      project: "Sample Project 6",
      event: "Event number 6",
      description: "New event details for project 6.",
      like: 110,
      comment: 9,
    },
    {
      profile: `${images.user2}`,
      name: "Ravi Kumar",
      postedAt: "3:00pm",
      postedOn: "6 Oct 2024",
      editedAt: "3:30pm 6 Oct 2024",
      status: "update",
      project: "Sample Project 7",
      event: "Event number 7",
      description: "Update related to project 7 event 7.",
      like: 150,
      comment: 6,
    },
    {
      profile: `${images.user4}`,
      name: "Priya Jain",
      postedAt: "12:00pm",
      postedOn: "5 Oct 2024",
      editedAt: "1pm 5 Oct 2024",
      status: "update",
      project: "Sample Project 8",
      event: "Event number 8",
      description: "Short description about project 8 event.",
      like: 80,
      comment: 9,
    },
    {
      profile: `${images.user4}`,
      name: "Anjali Patel",
      postedAt: "8:00am",
      postedOn: "3 Oct 2024",
      editedAt: "9am 3 Oct 2024",
      status: "update",
      project: "Sample Project 10",
      event: "Event number 10",
      description: "Update regarding project 10 and event 10.",
      like: 100,
      comment: 7,
    },
    {
      profile: `${images.user1}`,
      name: "Rahul Mehra",
      postedAt: "6:00pm",
      postedOn: "4 Oct 2024",
      editedAt: "7pm 4 Oct 2024",
      status: "update",
      project: "Sample Project 9",
      event: "Event number 9",
      description: "New update about project 9 event.",
      like: 30,
      comment: 5,
    }
  ]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleStory = (e) => {
    e.preventDefault();
    setNewsArray((prevNews) => [
      ...prevNews,
      {
        profile: `${images.user4}`,
        name: story.name,
        postedAt: new Date().toLocaleTimeString(),
        postedOn: new Date().toLocaleDateString(),
        editedAt: "",
        status: "update",
        project: story.project,
        event: story.event,
        description: story.description,
        like: 0,
        comment: 0,
      },
    ]);
    setStory({ name: "", project: "", event: "", description: "" });
    handleClose();
  };

  return (
    <div className="bg-neutral-100 h-full mr-1 rounded-lg p-2 flex flex-col items-center">
      <h1 className="text-center font-bold text-lg">Newsfeed</h1>
      <div className="overflow-y-scroll h-[90%] grid grid-cols-1 xl:grid-cols-2 gap-6 p-4">
        {newsArray.slice().reverse().map((news, index) => (
          <NewsCard key={index} data={news} />
        ))}
      </div>
      <button
        onClick={handleOpen}
        className="py-1 bg-red-500 mt-2 px-3 w-fit rounded-md text-white hover:bg-red-400 hover:scale-110 duration-700"
      >
        Share Latest News
      </button>

      <Modal open={open} onClose={handleClose} >
        <Box sx={style}>
          <div className="contact-form">
            <span className="heading">Share a Story</span>
            <form onSubmit={handleStory}>
              <div className="flex flex-col gap-4">
                <div className="flex items-center">
                  <label htmlFor="name" className="font-bold mr-2">Name:</label>
                  <input
                    type="text"
                    id="name"
                    value={story.name}
                    onChange={(e) => setStory({ ...story, name: e.target.value })}
                    required
                    className="flex-grow p-1 border"
                  />
                </div>

                <div className="flex items-center">
                  <label htmlFor="project" className="font-bold mr-2">Project:</label>
                  <input
                    type="text"
                    id="project"
                    value={story.project}
                    onChange={(e) => setStory({ ...story, project: e.target.value })}
                    required
                    className="flex-grow p-1 border"
                  />
                </div>

                <div className="flex items-center">
                  <label htmlFor="event" className="font-bold mr-2">Event:</label>
                  <input
                    type="text"
                    id="event"
                    value={story.event}
                    onChange={(e) => setStory({ ...story, event: e.target.value })}
                    required
                    className="flex-grow p-1 border"
                  />
                </div>

                <div className="flex items-center">
                  <label htmlFor="description" className="font-bold mr-2">Story:</label>
                  <textarea
                    id="description"
                    value={story.description}
                    onChange={(e) => setStory({ ...story, description: e.target.value })}
                    required
                    className="flex-grow p-1 border"
                    minLength={10}
                  ></textarea>
                </div>

                <button type="submit" className="bg-green-500 text-white py-1 px-3 rounded hover:bg-green-400">
                  Post
                </button >
              </div>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default Newsfeed;
