import React, { useEffect, useState } from 'react';
import { Box, Container, CssBaseline } from '@mui/material';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useDrag, useDrop } from 'react-dnd';
import CardsFlightPast from './FlightsPast';
import CardsFlightUpcoming from './FlightsUpcoming';
import Header from '../Header';
import { useGetUpcomingFlightsQuery } from '../../services/flightsApi';
import MyLaunches from './MyLaunches';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '75vh',
  width: '100%',
  overflowY: 'scroll',
  display: 'flex',
  justifyContent: 'center',

  '&::-webkit-scrollbar': {
    width: '0.4em',
  },
}));

const MainContent = () => {
  const { data, isLoading } = useGetUpcomingFlightsQuery();

  const [launches, setLaunches] = useState();
  const [myLaunches, setMyLaunches] = useState([]);

  useEffect(() => {
    setLaunches(data);
  }, [data]);

  const [{ isOver }, launchRef] = useDrop({
    accept: 'launch',
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const [{ isOver: isLaunchOver }, removeMylaunchRef] = useDrop({
    accept: 'myLaunch',
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const moveLaunch = (item) => {
    console.log(item);
  };

  return (
    <Box>
      <CssBaseline />
      <Container sx={{ textAlign: 'center' }} maxWidth="xl">
        <Header />
        <Grid container justifyContent="center" spacing={2}>
          <Grid item xs={6} md={3}>
            <h4>PAST LAUNCHES</h4>
            <Item>
              <CardsFlightPast />
            </Item>
          </Grid>
          <Grid item xs={6} md={3}>
            <h4>LAUNCHES</h4>
            <Item ref={removeMylaunchRef}>
              <CardsFlightUpcoming
                data={data}
                isLoading={isLoading}
                onDropLaunch={moveLaunch}
                // type={itemTypes}
              />
            </Item>
          </Grid>
          <Grid item xs={6} md={3}>
            <h4>MY LAUNCHES</h4>
            <Item ref={launchRef}>
              <MyLaunches onDropLaunch={moveLaunch} />
            </Item>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MainContent;
