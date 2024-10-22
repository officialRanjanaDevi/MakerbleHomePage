import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import NewspaperOutlinedIcon from '@mui/icons-material/NewspaperOutlined';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import KeyboardAltOutlinedIcon from '@mui/icons-material/KeyboardAltOutlined';
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import PeopleOutlinedIcon from '@mui/icons-material/PeopleOutlined';
import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined';
import GradeOutlinedIcon from '@mui/icons-material/GradeOutlined';
import FactCheckOutlinedIcon from '@mui/icons-material/FactCheckOutlined';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState(location.pathname);
  console.log(active);
  useEffect(() => {
      setActive(location.pathname);
  }, [location.pathname]);

  const getItemClass = (item) => {
    return `py-2 w-full font-semibold rounded-md px-4 ${
      active === item ? 'text-white text-lg pl-6' : ''
    }`;
  };

  const getItemStyle = (item, color) => {
    return {
      backgroundColor: active === item ? color : '',
    };
  };

  const menuItems = [
    { label: 'Newsfeed', color: 'rgba(255,117,120,255)', icon: <NewspaperOutlinedIcon sx={{ fontSize: '1.2rem' }} />, link: '/' },
    { label: 'Album', color: 'rgba(244,65,45,255)', icon: <PhotoLibraryIcon sx={{ fontSize: '1.2rem' }} />, link: '/album' },
    { label: 'Board', color: 'rgba(243,121,38,255)', icon: <KeyboardAltOutlinedIcon sx={{ fontSize: '1.2rem' }} />, link: '/board' },
    { label: 'Contact', color: 'rgba(255,159,45,255)', icon: <ContactPageOutlinedIcon sx={{ fontSize: '1.2rem' }} />, link: '/contact' },
    { label: 'Events', color: 'rgba(126,199,84,255)', icon: <CalendarMonthOutlinedIcon sx={{ fontSize: '1.2rem' }} />, link: '/event' },
    { label: 'Following', color: 'rgba(112,178,70,255)', icon: <PeopleOutlinedIcon sx={{ fontSize: '1.2rem' }} />, link: '/follow' },
    { label: 'Organizations', color: 'rgba(66,156,146,255)', icon: <CorporateFareOutlinedIcon sx={{ fontSize: '1.2rem' }} />, link: '/organization' },
    { label: 'Personal Progress', color: 'rgba(75,157,215,255)', icon: <GradeOutlinedIcon sx={{ fontSize: '1.2rem' }} />, link: '/personalprogress' },
    { label: 'Projects', color: 'rgba(63,107,142,255)', icon: <FactCheckOutlinedIcon sx={{ fontSize: '1.2rem' }} />, link: '/project' },
    { label: 'Tasks', color: 'rgba(179,75,162,255)', icon: <AssignmentTurnedInOutlinedIcon sx={{ fontSize: '1.2rem' }} />, link: '/task' },
  ];

  return (
    <div className='w-1/6 min-w-52 h-full md:block hidden bg-neutral-100 mx-1 rounded-md'>
      <h1 className='pl-2 mt-2 font-bold text-lg'>My Apps</h1>
      <ul className='w-full flex flex-col h-[80%] px-2 mt-2 justify-between '>
        {menuItems.map((item) => (
          <Link
            to={item.link}
            key={item.label}
            className={getItemClass(item.link)}
            style={getItemStyle(item.link, item.color)}
            onClick={() => navigate(item.link)}
          >
            {item.icon} {item.label}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
