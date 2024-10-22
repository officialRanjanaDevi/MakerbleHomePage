import React from 'react'
import images from '../../assets/images'
import KeyboardArrowRightRoundedIcon from '@mui/icons-material/KeyboardArrowRightRounded';
import './Footer.css'
import CopyrightRoundedIcon from '@mui/icons-material/CopyrightRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
const Footer = () => {
  return (

      <div className='bg-white '>
<img src={images.rainbow} alt="" className='w-full h-2 rounded-full mt-3' />
   
    <div className='flex justify-between p-4  xl:flex-row flex-col '>
      <div className='mx-auto mb-4'>
      <img src={images.name} className='h-16 w-44'></img>

      </div>

     

      <div className='flex justify-between xl:justify-evenly  text-xs sm:text-sm md:text-md   basis-2/3'>

      <div >
        <h3 className='font-bold'>Support links</h3>
        <p  className='contact-link-hover'><KeyboardArrowRightRoundedIcon />About us</p>
        <p  className='contact-link-hover'><KeyboardArrowRightRoundedIcon />Terms and Conditions</p>
        <p  className='contact-link-hover'><KeyboardArrowRightRoundedIcon />Privacy and Cookies</p>
      </div>

      <div>
        <h3 className='font-bold'>Organizations</h3>
        <p  className='link-hover'>Control Panel</p>
        <p  className='link-hover'>Discover the Marketplace</p>
        <p  className='link-hover'>Create Organization Account</p>
      </div>

      <div>
        <h3 className='font-bold'>Your Account</h3>
        <p className='link-hover'>Library</p>
        <p  className='link-hover'>Profile</p>
        <p  className='link-hover'>Projects</p>
        <p  className='link-hover'>Help</p>
      </div>

      <div>
        <h3 className='font-bold'>Explore</h3>
        <p className='link-hover'>Metrices</p>
        <p className='link-hover'>Networks</p>
        <p className='link-hover'>Strategies</p>
        <p className='link-hover'>Projects</p>
        <p className='link-hover'>Studies</p>
        <p className='link-hover'>Surveys</p>
        <p className='link-hover'>Tips</p>
        <p className='link-hover'>Vouchers</p>
      </div>

      </div>
      <hr className='xl:hidden'></hr>
      <div className='w-full xl:w-fit text-center xl:mt-0 mt-2'>
     
          <h3 className='font-bold '>Follow the Makerble Story</h3>
          <div className='flex justify-center'>          
          <div className='bg-lime-600 icon-hover'><i class="fa-brands fa-linkedin-in"></i></div>
          <div className='bg-red-500 icon-hover'><i class="fa-brands fa-instagram"></i></div>
          <div className='bg-sky-600 icon-hover'><i class="fa-brands fa-youtube"></i></div>
          <div className='bg-orange-500 icon-hover'><i class="fa-brands fa-twitter"></i></div>
          <div className='bg-amber-500 icon-hover'><i class="fa-brands fa-facebook-f"></i></div>
          </div>
      </div>
    </div>
    <hr/>
    <div className='text-center my-2'>
    <p>Contact Us: <MailOutlineRoundedIcon sx={{fontSize:"1rem"}}/> makerble@gmail.com</p>
    <p>< CopyrightRoundedIcon  sx={{fontSize:"1rem"}}/> Makerble 2024</p>
   
    </div>
    </div>
   
  )
}

export default Footer
