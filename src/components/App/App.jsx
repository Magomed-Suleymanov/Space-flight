import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainContent from '../Main';
import IndividualCardInfo from '../AdditionalInfo/IndividualCardInfo';
import NotFound from '../NotFound/NotFound';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainContent />} />
      <Route path="info/:id" element={<IndividualCardInfo />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
