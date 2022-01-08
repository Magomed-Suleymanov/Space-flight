import React from 'react';
import { Box, Button } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';
import { useGetFlightByIdQuery } from '../../services/flightsApi';
import {
  boxWrapStyle,
  detailsStyle,
  imgNotStyle,
  imgStyle,
  loadingStyle,
  wrapDetailsStyle,
} from './styleAdditional';
import { linkStyle } from '../Main/styleMain';

const IndividualCardInfo = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetFlightByIdQuery(id);

  const newDate = new Date(data?.date_utc);
  const date = newDate.toUTCString();

  const Img =
    data?.links.patch.small === null ? (
      <ImageNotSupportedIcon color="primary" sx={imgNotStyle} />
    ) : (
      <img style={imgStyle} src={data?.links.patch.small} alt="img" />
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
      <Box style={loadingStyle}>
        <h1>Loading</h1>
      </Box>
    );
  }

  return (
    <Box sx={boxWrapStyle}>
      <Box sx={imgStyle}>{Img}</Box>
      <Box sx={wrapDetailsStyle}>
        <h1>{data.name}</h1>
        <Box sx={detailsStyle}>
          <Box>Flight Number: {flightNumber}</Box>
          <Box>Details: {details}</Box>
          <Box>Date: {date}</Box>
          <Box>{linkWiki}</Box>
          <Box>{linkWebcast}</Box>
          <Box>{linkArticle}</Box>
        </Box>
        <Link style={linkStyle} to="/">
          <Button variant="outlined" size="medium">
            Back
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default IndividualCardInfo;
