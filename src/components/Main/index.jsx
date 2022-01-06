import React, { useEffect, useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Container,
  CssBaseline,
  Typography,
} from '@mui/material';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useDrag, useDrop } from 'react-dnd';
import { Link } from 'react-router-dom';
import CardsFlightPast from './FlightsPast';
import CardsFlightUpcoming from './FlightsUpcoming';
import Header from '../Header';
import { useGetUpcomingFlightsQuery } from '../../services/flightsApi';
import MyLaunches from './MyLaunches';
import SkeletonLoader from '../Skeleton/SkeletonLoader';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '75vh',
  width: '100%',
  overflowY: 'scroll',

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
    if (item && item.type === 'launch') {
      setMyLaunches((_myLaunch) => [..._myLaunch, launches[item.index]]);
      setLaunches((_launch) => _launch.filter((_, idx) => idx !== item.index));
    } else {
      setLaunches((_launch) => [..._launch, myLaunches[item.index]]);
      setMyLaunches((_myLaunch) =>
        _myLaunch.filter((_, idx) => idx !== item.index),
      );
    }
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
              {isLoading ? (
                <SkeletonLoader />
              ) : (
                launches?.map((item, index) => {
                  return (
                    <CardsFlightUpcoming
                      key={item.id}
                      items={item}
                      index={index}
                      onDropLaunch={moveLaunch}
                      launchType="launch"
                    />
                  );
                })
              )}
            </Item>
          </Grid>
          <Grid item xs={6} md={3}>
            <h4>MY LAUNCHES</h4>
            <Item ref={launchRef}>
              {myLaunches.map((item, index) => {
                return (
                  <CardsFlightUpcoming
                    key={item.id}
                    items={item}
                    index={index}
                    onDropLaunch={moveLaunch}
                    launchType="myLaunch"
                  />
                );
              })}
            </Item>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MainContent;
