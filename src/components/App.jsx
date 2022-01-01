import React from 'react';
import { Box, Container, CssBaseline } from '@mui/material';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import CardsFlightPast from './FlightsPast';
import CardsUpcomingFlight from './FlightsUpcoming';

const App = () => {
  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    '&::-webkit-scrollbar': {
      width: '0.4em',
    },
  }));
  return (
    <Box className={'app'}>
      <CssBaseline />
      <Container maxWidth={'xl'}>
        <Grid container justifyContent={'center'} spacing={2}>
          <Grid justify="center" item xs={6} md={3}>
            <Item
              classname={'alfa'}
              sx={{
                height: '95vh',
                width: '100%',
                overflowY: 'scroll',
                display: 'flex',
                justifyContent: 'center',
                padding: 2,
              }}
            >
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

export default App;
