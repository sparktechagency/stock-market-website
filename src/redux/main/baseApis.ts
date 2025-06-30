import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { url } from './server'

export const baseApis = createApi({
  reducerPath: 'stockMarketApis',
  baseQuery: fetchBaseQuery({
    baseUrl: url,
    prepareHeaders: (headers, {}) => {
      const token = localStorage.getItem('token')
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  tagTypes: ['Profile'],
  endpoints: () => ({}),
})
