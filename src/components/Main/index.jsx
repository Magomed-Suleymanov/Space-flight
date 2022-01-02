import React from 'react';
import { Box, Container, CssBaseline } from '@mui/material';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import CardsFlightPast from './FlightsPast';
import CardsUpcomingFlight from './FlightsUpcoming';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '95vh',
  width: '100%',
  overflowY: 'scroll',
  display: 'flex',
  justifyContent: 'center',

  '&::-webkit-scrollbar': {
    width: '0.4em',
  },
}));

const MainContent = () => {
  return (
    <Box>
      <CssBaseline />
      <Container maxWidth="xl">
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={6} md={3}>
            <Item>
              <CardsFlightPast />
            </Item>
          </Grid>
          <Grid item xs={6} md={3}>
            <Item>
              <CardsUpcomingFlight />
            </Item>
          </Grid>
          <Grid item xs={6} md={3}>
            <Item>3</Item>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MainContent;
