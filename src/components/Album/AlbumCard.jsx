import React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import './Album.css'
const AlbumCard = (info) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const data = info.data;
  return (
    <>
       
     <div onClick={handleOpen} className='card border-2 rounded-lg relative max-w-72'>
        <img src={data.logo} alt={data.name} className='image w-full h-52 rounded-t-lg'></img>
        <h2 className='text-center font-bold py-2 title'>{data.name}</h2>
    </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
         <h2 className='text-center font-bold'>{data.name}</h2>
          <ul>
            {data.projects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </Box>
      </Modal>
    </>
  );
};

export default AlbumCard;
