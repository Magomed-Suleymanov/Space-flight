import React from 'react';
import { Box } from '@mui/material';
import { Route, Routes } from 'react-router-dom';
import MainContent from '../Main';
import InduvidualCardInfo from '../AdditionalInfo';

const App = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="info/:id" element={<InduvidualCardInfo />} />
      </Routes>
    </Box>
  );
};

export default App;
