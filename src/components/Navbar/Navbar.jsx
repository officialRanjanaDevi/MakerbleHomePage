import React from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import HorizontalSplitOutlinedIcon from "@mui/icons-material/HorizontalSplitOutlined";
import Avatar from '@mui/material/Avatar';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import images from '../../assets/images.js';
import {Link, useNavigate} from "react-router-dom";
const Navbar = () => {
  const [apps, setApps] = React.useState(null);
  const openApp = Boolean(apps);
  const [more, setMore] = React.useState(null);
  const openMore = Boolean(more);
  const navigate=useNavigate();
  const handleClick = (event) => {
    setApps(event.currentTarget);
  };

  const handleClose = () => {
    setApps(null);
  };

  const handleClickMore = (event) => {
    setMore(event.currentTarget);
  };

  const handleCloseMore = () => {
    setMore(null);
  };

  return (
    <div className="w-full bg-white py-3 flex items-center ">
      {/* Mobile view */}
      <div className="md:hidden flex w-full px-3">
      <h3
            id="apps-button"
            aria-controls={openApp ? "apps-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openApp ? "true" : undefined}
            onClick={handleClick}
            className="hover:cursor-pointer "
          >
            My apps <ArrowDropDownRoundedIcon sx={{ fontSize: "1.9rem" }} />
          </h3>
          <Menu
            id="apps-menu"
            MenuListProps={{
              "aria-labelledby": "apps-button",
            }}
            anchorEl={apps}
            open={openApp}
            onClose={handleClose}
            TransitionComponent={Fade}
            
          >
           
             <Link to='./' className="w-full block hover:bg-neutral-200 hover:scale-105 py-2 px-4" onClick={handleClose}>Newsfeed</Link>
             <Link to='./album' className="w-full block hover:bg-neutral-200 hover:scale-105 py-2 px-4" onClick={handleClose}>Album</Link>
            <Link to='./board' className="w-full block hover:bg-neutral-200 hover:scale-105 py-2 px-4" onClick={handleClose}>Boards</Link>
            <Link to='./contact' className="w-full block hover:bg-neutral-200 hover:scale-105 py-2 px-4" onClick={handleClose}>Contacts</Link>
           
            <Link to='./event' className="w-full block hover:bg-neutral-200 hover:scale-105 py-2 px-4" onClick={handleClose}>Events</Link>
            <Link to='./follow' className="w-full block hover:bg-neutral-200 hover:scale-105 py-2 px-4" onClick={handleClose}>Following</Link>
            <Link to='./project' className="w-full block hover:bg-neutral-200 hover:scale-105 py-2 px-4" onClick={handleClose}>Projects</Link>
            <Link to='./organization' className="w-full block hover:bg-neutral-200 hover:scale-105 py-2 px-4" onClick={handleClose}>Organizations</Link>
            <Link to='./personalprogress' className="w-full block hover:bg-neutral-200 hover:scale-105 py-2 px-4" onClick={handleClose}>Progress</Link>
            <Link to='./task' className="w-full block hover:bg-neutral-200 hover:scale-105 py-2 px-4" onClick={handleClose}>Tasks</Link>
          </Menu>
      </div>

      {/* Desktop view */}
      <div className="md:flex hidden w-full justify-between px-2 items-center">
        <div className="flex basis-1/4 justify-evenly items-center">
          <img src={images.logo} alt="Logo" className="h-8 w-8" />
         
          <h3  onClick={()=>navigate('/')} className="hover:cursor-pointer font-bold hover:opacity-80 hover:scale-105 " >Home</h3>
          <h3 className="hover:cursor-pointer font-bold hover:opacity-80 hover:scale-105">Explore</h3>
        </div>

        <div className="flex md:basis-3/5 lg:basis-2/5 xl:basis-1/3 justify-between items-center">
        <NotificationsIcon className="hover:cursor-pointer"/>
        <MailOutlineIcon className="hover:cursor-pointer"/>
        <div className="flex items-center">
        <Avatar alt="Cindy Baker" src={images.user4}  sx={{ width: 36, height: 36 }} />
        <h3 className="ml-2 font-bold">Riya Sen</h3>
        </div>
       
          <h3 className="hover:cursor-pointer bg-red-500 text-white px-3 rounded-lg py-1 font-semibold hover:scale-105"><AddRoundedIcon />Create</h3>
          <h3
            className="hover:cursor-pointer border-2 border-neutral-400 rounded-lg px-3 py-0.5 font-bold hover:opacity-80 hover:scale-105"
            id="more-button"
            aria-controls={openMore ? "more-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={openMore ? "true" : undefined}
            onClick={handleClickMore}
          >
            <HorizontalSplitOutlinedIcon /> More
          </h3>
          <Menu
            id="more-menu"
            MenuListProps={{
              "aria-labelledby": "more-button",
            }}
            anchorEl={more}
            open={openMore}
            onClose={handleCloseMore}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleCloseMore}>Surveys</MenuItem>
            <MenuItem onClick={handleCloseMore}>Goals</MenuItem>
            <MenuItem onClick={handleCloseMore}>Strategies</MenuItem>
            <MenuItem onClick={handleCloseMore}>Tips</MenuItem>
            <MenuItem onClick={handleCloseMore}>Collections</MenuItem>
            <MenuItem onClick={handleCloseMore}>People</MenuItem>
            <MenuItem onClick={handleCloseMore}>Cases</MenuItem>
            <MenuItem onClick={handleCloseMore}>Contact Forms</MenuItem>
            <MenuItem onClick={handleCloseMore}>Contact Groups</MenuItem>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
