import { baseApis } from './main/baseApis'

const contactUsApis = baseApis.injectEndpoints({
  endpoints: (builder) => ({
    sendContactUs: builder.mutation({
      query: (data) => ({
        url: '/contact-us',
        method: 'Post',
        body: data,
      }),
    }),
  }),
  overrideExisting: false,
})

export const { useSendContactUsMutation } = contactUsApis

export default contactUsApis
