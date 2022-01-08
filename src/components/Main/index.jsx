import React, { useEffect, useState } from 'react';
import { Box, Container, CssBaseline } from '@mui/material';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import { useDrop } from 'react-dnd';
import CardsFlightPast from './FlightsPast/CardsFlightPast';
import Header from '../Header/Header';
import { useGetUpcomingFlightsQuery } from '../../services/flightsApi';
import SkeletonLoader from '../Skeleton/SkeletonLoader';
import Notification from '../Notification/Notification';
import { contStyle } from './styleMain';
import CardsFlightUpcoming from './FlightsUpcoming/CardsFlightUpcoming';

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
  const [activeNotification, setActiveNotification] = useState(false);

  useEffect(() => {
    setLaunches(data);
  }, [data]);

  const [, launchRef] = useDrop({
    accept: 'launch',
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const [, removeMylaunchRef] = useDrop({
    accept: 'myLaunch',
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const moveLaunch = (item) => {
    if (item && item.type === 'launch') {
      setMyLaunches((_myLaunch) => [..._myLaunch, launches[item.index]]);
      setLaunches((_launch) => _launch.filter((_, idx) => idx !== item.index));
      setActiveNotification(true);
      setTimeout(() => {
        setActiveNotification(false);
      }, 800);
    } else {
      setActiveNotification(false);
      setLaunches((_launch) => [..._launch, myLaunches[item.index]]);
      setMyLaunches((_myLaunch) =>
        _myLaunch.filter((_, idx) => idx !== item.index),
      );
    }
  };

  return (
    <Box>
      <CssBaseline />
      <Container sx={contStyle} maxWidth="xl">
        <Header />
        <Grid container justifyContent="center" spacing={2}>
          {activeNotification && <Notification />}
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
              {myLaunches?.map((item, index) => {
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
