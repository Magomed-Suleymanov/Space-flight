import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useGetPastFlightsQuery } from '../../../services/flightsApi';
import SkeletonLoader from '../../Skeleton/SkeletonLoader';

const CardsFlightPast = () => {
  const { data, isLoading } = useGetPastFlightsQuery();

  return (
    <Box>
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        data.map((item) => {
          return (
            <Link
              key={item.id}
              style={{ textDecoration: 'none' }}
              to={`info/${item.id}`}
            >
              <Card sx={{ width: 220, margin: '10px auto' }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Details:{' '}
                    {item.details?.length === undefined ? (
                      <span>Don`t information</span>
                    ) : (
                      item.details?.substring(0, 50)
                    )}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          );
        })
      )}
    </Box>
  );
};

export default CardsFlightPast;
