import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { useDrag } from 'react-dnd';
import { Link } from 'react-router-dom';
import { cardStyle, linkStyle } from '../styleMain';

const CardsFlightUpcoming = ({ items, index, onDropLaunch, launchType }) => {
  const [, dragRef] = useDrag({
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
    <Link style={linkStyle} to={`info/${items.id}`}>
      <Card ref={dragRef} sx={cardStyle}>
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
