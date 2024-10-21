import React from "react";
import images from "../../assets/images";
import AddBoxIcon from "@mui/icons-material/AddBox";
const PersonalProgress = () => {
  const progress = [
    {
      title: "I feel very energetic",
      progress: 5,
      color: "rgba(255,117,120,255)",
    },
    {
      title: "I feel motivated",
      progress: 4,
      color: "rgba(244,65,45,255)",
    },
    {
      title: "I feel somewhat productive",
      progress: 3,
      color: "rgba(243,121,38,255)",
    },
    {
      title: "I feel a bit tired",
      progress: 2,
      color: "rgba(255,159,45,255)",
    },
    {
      title: "I feel exhausted",
      progress: 1,
      color: "rgba(126,199,84,255)",
    },
    {
      title: "I feel focused and driven",
      progress: 5,
      color: "rgba(112,178,70,255)",
    },
    {
      title: "I feel calm and composed",
      progress: 4,
      color: "rgba(66,156,146,255)",
    },
    {
      title: "I feel slightly distracted",
      progress: 3,
      color: "rgba(75,157,215,255)",
    },
    {
      title: "I feel mentally drained",
      progress: 2,
      color: "rgba(179,75,162,255)",
    },
  ];

  return (
    <div className="bg-neutral-100 h-full mr-1 rounded-lg p-2 ">
      <h1 className=" font-bold text-center text-lg mb-4">Personal Progress</h1>
      <div className="grid lg:grid-cols-2 h-[95%] px-4 gap-y-4 overflow-y-scroll">
        {progress.map((progress, index) => (
          <div key={index} className="flex flex-cols">
            <img src={images.user4} className="h-12 w-12 border-2 border-black rounded-md"></img>
            <div className="w-[90%] ml-3 ">
              <h2>{progress.title}</h2>
              <div className="flex  w-full items-center">
                <div className="h-4 w-5/6 bg-white rounded-full border-2 border-neutral-600">
                  <div
                    className=" h-full text-xs text-white rounded-full"
                    style={{
                      width: `${progress.progress * 10}%`,
                      backgroundColor: `${progress.color}`,
                    }}
                  ></div>
                </div>
                <AddBoxIcon className="hover:text-lime-600 hover:scale-110" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalProgress;
