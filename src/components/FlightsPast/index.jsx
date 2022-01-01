import React from 'react';
import { Box } from '@mui/material';
import { useGetPastFlightsQuery } from '../../services/flightsApi';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import CardPast from './CardPast';

const CardsFlightPast = () => {
  const { data, isLoading } = useGetPastFlightsQuery();

  const alfa = data?.map((item) => {
    return isLoading ? (
      <Stack key={item.id} spacing={1}>
        <Skeleton variant="text" />
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={118} />
      </Stack>
    ) : (
      <CardPast key={item.id} item={item} />
    );
  });

  return <Box>{alfa}</Box>;
};

export default CardsFlightPast;
