import React, { useState } from 'react';
import images from '../../assets/images';

const Follow = () => {
  const [active, setActive] = useState("following");

  const followingArray = [
    { name: "Nick", profile: `${images.user2}` },
    { name: "Alice", profile: `${images.user1}` },
    { name: "Sneha", profile: `${images.user4}` },
    { name: "Sophia", profile: `${images.user3}` },
    { name: "Michael", profile: `${images.user2}` },
    { name: "Emma", profile: `${images.user3}` },
    { name: "David", profile: `${images.user1}` },
    { name: "Olivia", profile: `${images.user4}` },
    { name: "James", profile: `${images.user1}` },
    { name: "Mia", profile: `${images.user3}` }
  ];

  const followersArray = [
    { name: "John", profile: `${images.user4}` },
    { name: "Liam", profile: `${images.user1}` },
    { name: "Isabella", profile: `${images.user2}` },
    { name: "Amelia", profile: `${images.user3}` },
  ];

  return (
    <div className="bg-neutral-100 h-full mr-1 rounded-lg p-2 ">
      <div className="flex justify-center mb-4">
        <button 
          onClick={() => setActive("following")}
          className={`px-3 py-1 rounded-md font-bold text-white mx-2 ${
            active === "following" ? 'bg-lime-500' : 'bg-gray-400'
          }`}
        >
          Following
        </button>
        <button 
          onClick={() => setActive("followers")}
          className={`px-3 py-1 rounded-md font-bold text-white mx-2 ${
            active === "followers" ? 'bg-lime-500' : 'bg-gray-400'
          }`}
        >
          Followers
        </button>
      </div>

          <div className='overflow-y-scroll h-[93%]'>
        {(active === "following" ? followingArray : followersArray).map((person, index) => (
          <div key={index} className='flex mt-3 justify-center items-center'>
            <img src={person.profile} alt={`${person.name} profile`} className='mx-3 h-12 w-12 rounded-full' />
            <h2>{person.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Follow;
