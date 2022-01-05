import React from 'react';
import { Box, Button } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';
import { useGetFlightByIdQuery } from '../../services/flightsApi';

const InduvidualCardInfo = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetFlightByIdQuery(id);

  const newDate = new Date(data?.date_utc);
  const date = newDate.toUTCString();

  const Img =
    data?.links.patch.small === null ? (
      <ImageNotSupportedIcon color="primary" sx={{ fontSize: '300px' }} />
    ) : (
      <img style={{ width: '250px' }} src={data?.links.patch.small} alt="img" />
    );

  const details =
    data?.details === null ? <span>Not provided</span> : data?.details;

  const flightNumber =
    data?.flight_number === null ? (
      <span>Not provided</span>
    ) : (
      data?.flight_number
    );

  const linkWiki =
    data?.links.wikipedia === null ? (
      <span>Wikipedia: Not provided</span>
    ) : (
      <a href={data?.links.wikipedia}>Wikipedia</a>
    );

  const linkWebcast =
    data?.links.webcast === null ? (
      <span>Webcast: Not provided</span>
    ) : (
      <a href={data?.links.webcast}>Webcast</a>
    );

  const linkArticle =
    data?.links.article === null ? (
      <span>Article: Not provided</span>
    ) : (
      <a href={data?.links.article}>Article</a>
    );

  if (isLoading) {
    return (
      <h1
        style={{ widht: '50px', position: 'absolute', left: '45%', top: '40%' }}
      >
        loading
      </h1>
    );
  }

  return (
    <Box
      sx={{
        width: 700,
        minHeight: 400,
        position: 'absolute',
        top: '30%',
        left: 'calc(50% - 350px)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px solid lightgray',
        borderRadius: '5px',
        boxShadow: '0px 0px 10px rgba(0, 0, 0)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
        }}
      >
        {Img}
      </Box>
      <Box sx={{ width: '380px' }}>
        <h1>{data.name}</h1>
        <Box sx={{ fontSize: 20, marginBottom: '15px' }}>
          <Box>Flight Number: {flightNumber}</Box>
          <Box>Details: {details}</Box>
          <Box>Date: {date}</Box>
          <Box>{linkWiki}</Box>
          <Box>{linkWebcast}</Box>
          <Box>{linkArticle}</Box>
        </Box>
        <Link style={{ textDecoration: 'none' }} to="/">
          <Button variant="outlined" size="medium">
            Back
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default InduvidualCardInfo;
