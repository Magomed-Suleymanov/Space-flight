import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { useDrag, useDrop } from 'react-dnd';
import { Link } from 'react-router-dom';
import SkeletonLoader from '../../Skeleton/SkeletonLoader';

const CardsFlightUpcoming = ({ data, isLoading, onDropLaunch }) => {
  // const indexLaunch = data?.map((item,index) => index);
  //   const [{ isDragging }, dragRef] = useDrag({
  //     item: {
  //       type: itemTypes.CARD,
  //       index: indx,
  //     },
  //     end: (item, monitor) => {
  //       const dropResult = monitor.getDropResult();
  //
  //       if (item && dropResult) {
  //         onDropLaunch(item);
  //       }
  //     },
  //     collect: (monitor) => ({
  //       isDragging: monitor.isDragging(),
  //     }),
  //   });

  return (
    <Box>
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        data.map((item, index) => {
          return (
            <Link
              key={item.id}
              style={{ textDecoration: 'none' }}
              to={`info/${item.id}`}
            >
              <Card sx={{ width: 220, margin: '10px 0' }}>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Details:
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

export default CardsFlightUpcoming;
