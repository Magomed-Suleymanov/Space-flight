import React from 'react';
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material';

const CardPast = ({ item }) => {
  return (
    <div>
      <Card sx={{ width: 220, margin: '10px 0' }}>
        <CardMedia
          component="img"
          height="220"
          image={item.links.patch.small}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {item.details?.substring(0, 50)}...
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default CardPast;
