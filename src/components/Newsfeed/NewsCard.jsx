import React, { useState } from "react";
import images from "../../assets/images";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
const NewsCard = (news) => {
  const data=news.data;
 
  const [likebtn,setLikebtn] =useState(false);
  const [likes,setLikes]=useState(data.like);
  const handleLike=()=>{
   
    if(likebtn){
      setLikebtn(false);
      setLikes(likes-1);
      console.log(likes)
    }else{
      setLikebtn(true);
      setLikes(likes+1);
      console.log(likes);
    }
   
  }


   return (
    <div className=" flex flex-col border-2 border-neutral-300 p-4 rounded-md">
      <div className="flex justify-between">
        <div className="flex ">
          <img src={data.profile} className="h-16 w-16 rounded-md "></img>
          <div className="ml-2">
            <h3 className="text-sky-600 font-bold">{data.name}</h3>
            <p className="text-xs text-neutral-500">Posted at {data.postedAt} on {data.postedOn}</p>
            <p className="bg-green-600 rounded-full text-white px-2 w-fit text-sm">{data.status}</p>
          </div>
        </div>
        <div className="flex flex-col items-end text-xs">
          <SettingsRoundedIcon
            sx={{ fontSize: "1rem", color: "rgba(75,157,215,255)" }}
          />
          <p className="text-neutral-400">Posted about 12 hrs ago </p>
        </div>
      </div>
      <div className="my-2 ">
        <p className="text-sm text-justify">New update by <b className="text-sky-600"> {data.name}</b> working on the <b className="text-sky-600">{data.project}</b> for <b className="text-sky-600"> {data.event}</b></p>
        <p className="text-sm mt-2 ">{data.description}</p>
      </div>

      <p>{likes}<FavoriteOutlinedIcon sx={{fontSize:"1rem",color:"red"}}/> {data.comment}<CommentOutlinedIcon sx={{fontSize:"1rem"}}/></p><hr />
     
     
        <form className="mt-3 w-full flex justify-evenly">
        <img src={images.user1} className="h-6 w-6 rounded-full mr-0.5 "></img>
        
         {likebtn?<FavoriteOutlinedIcon onClick={handleLike} sx={{color:"red"}}/>: <FavoriteBorderIcon onClick={handleLike}/>}
          <input
            type="text"
            className="rounded-full px-3 w-5/6 ml-0.5  text-sm py-1"
            placeholder="add comment ..."
            required
          />
          <button
            type="submit"
            className="rounded-full bg-red-500 text-sm font-semibold text-white px-3 ml-0.5  py-0.5 hover:scale-105"
            
          >
            Post
          </button>
        </form>
     
    </div>
  );
};

export default NewsCard;
