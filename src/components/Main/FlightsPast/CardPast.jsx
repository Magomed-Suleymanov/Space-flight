import React from 'react';
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

const CardPast = ({ item }) => {
  const details =
    item.details?.length === undefined ? (
      <span>Don`t information</span>
    ) : (
      item.details?.substring(0, 50)
    );

  return (
    <Box>
      <Card sx={{ width: 220, margin: '10px 0' }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Details: {details}
          </Typography>
        </CardContent>
        <CardActions>
          <Link style={{ textDecoration: 'none' }} to={`info/${item.id}`}>
            <Button size="small">More</Button>
          </Link>
        </CardActions>
      </Card>
    </Box>
  );
};

export default CardPast;
