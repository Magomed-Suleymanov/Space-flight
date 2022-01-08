import React from 'react';
import { Box } from '@mui/material';
import { notificationStyle } from '../Main/styleMain';

const Notification = () => {
  return (
    <Box sx={notificationStyle}>
      <h3>You booked a flight ✅</h3>
    </Box>
  );
};

export default Notification;
