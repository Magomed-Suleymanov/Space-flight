import React from 'react';
import { Box } from '@mui/material';
import { boxStyle } from '../Main/styleMain';

const NotFound = () => {
  return (
    <Box sx={boxStyle}>
      <h2>Have you entered the correct address?</h2>
    </Box>
  );
};

export default NotFound;
