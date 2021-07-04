import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Pantry } from '../types';

type PantriesResult = {
    features: Pantry[],
};

// https://live-durhamnc.opendata.arcgis.com/search?q=Food
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://opendata.arcgis.com/datasets/' }),
  endpoints: (builder) => ({
    getPantries: builder.query<Pantry[], undefined>({
      query: (_arg?: undefined) => "655d6dc63b3949c2b07728c9d8feda84_2.geojson",
      transformResponse: (response: PantriesResult) => (response?.features || []),
    }),
  }),
})

export const { useGetPantriesQuery } = api;