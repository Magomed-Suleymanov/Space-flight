import React from 'react';
import { Box } from '@mui/material';

const NotFound = () => {
  return (
    <Box
      sx={{
        width: 500,
        position: 'absolute',
        left: 'calc(50% - 250px)',
        top: '40%',
        textAlign: 'center',
      }}
    >
      <h2>Have you entered the correct address?</h2>
    </Box>
  );
};

export default NotFound;
