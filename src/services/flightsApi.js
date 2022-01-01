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
  }),
});

export const { useGetPastFlightsQuery, useGetUpcomingFlightsQuery } =
  flightsApi;
