import React from 'react';
import { Box, Card, CardContent, Typography } from '@mui/material';
import { useDrag, useDrop } from 'react-dnd';
import { Link } from 'react-router-dom';

const CardsFlightUpcoming = ({ items, index, onDropLaunch, launchType }) => {
  const [{ isDragging }, dragRef] = useDrag({
    item: {
      type: launchType,
      index,
    },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();

      if (item && dropResult) {
        onDropLaunch(item);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  return (
    <Link style={{ textDecoration: 'none' }} to={`info/${items.id}`}>
      <Card ref={dragRef} sx={{ width: 220, margin: '10px auto' }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {items.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Details:
            {items.details?.length === undefined ? (
              <span>Don`t information</span>
            ) : (
              items.details?.substring(0, 50)
            )}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CardsFlightUpcoming;
