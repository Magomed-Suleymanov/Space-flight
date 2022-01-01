import React from 'react';
import { useGetUpcomingFlightsQuery } from '../../services/flightsApi';
import { Box } from '@mui/material';

const CardsUpcomingFlight = () => {
  const { data, isLoading } = useGetUpcomingFlightsQuery();

  return (
    <Box>
      {data?.map((item) => {
        return (
          <div key={item.id}>
            <div>{item.name}</div>
            <div>{item.details}</div>
          </div>
        );
      })}
    </Box>
  );
};

export default CardsUpcomingFlight;
