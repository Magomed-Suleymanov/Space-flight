import React from 'react';
import { Box } from '@mui/material';
import { useGetPastFlightsQuery } from '../../../services/flightsApi';
import CardPast from './CardPast';
import SkeletonLoader from '../../Skeleton/SkeletonLoader';

const CardsFlightPast = () => {
  const { data, isLoading } = useGetPastFlightsQuery();

  const dataCard = data?.map((item) => {
    return isLoading ? (
      <SkeletonLoader key={item.id} />
    ) : (
      <CardPast key={item.id} item={item} />
    );
  });

  return <Box>{dataCard}</Box>;
};

export default CardsFlightPast;
