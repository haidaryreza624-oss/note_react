import * as React from 'react';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Box, Divider } from '@mui/material';
import Stack from '@mui/material/Stack';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  borderRadius: 2,

  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ open, id, handleDelete, handleClose }) {



  return (
    <div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Are you sure you want to Delete:
          </Typography>

          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button onClick={handleDelete} variant='contained' color='error' sx={{ mx: 0.5 }}>
              Yes
            </Button>

            <Button onClick={handleClose} variant='contained' color='primary' sx={{ mx: 0.5 }}>
              Cancel
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
