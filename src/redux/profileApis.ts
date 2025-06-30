import { baseApis } from './main/baseApis'

const profileApis = baseApis.injectEndpoints({
  endpoints: (builder) => ({
    getMyProfile: builder.query({
      query: () => ({
        url: '/user/get-my-profile',
        method: 'GET',
      }),
      providesTags: ['Profile'],
    }),

    updateMyProfile: builder.mutation({
      query: (data) => ({
        url: '/normal-user/update-profile',
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: ['Profile'],
    }),
  }),
  overrideExisting: false,
})

export const { useGetMyProfileQuery, useUpdateMyProfileMutation } = profileApis

export default profileApis
