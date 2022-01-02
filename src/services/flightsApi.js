import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const flightsApi = createApi({
  reducerPath: 'flightsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.spacexdata.com/v5/launches/',
  }),
  endpoints: (build) => ({
    getPastFlights: build.query({
      query: () => 'past',
    }),
    getUpcomingFlights: build.query({
      query: () => 'upcoming',
    }),
    getFlightById: build.query({
      query: (flightId) => `${flightId}`,
    }),
  }),
});

export const {
  useGetPastFlightsQuery,
  useGetUpcomingFlightsQuery,
  useGetFlightByIdQuery,
} = flightsApi;
