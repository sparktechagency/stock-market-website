import { baseApis } from './main/baseApis'

const privacyApis = baseApis.injectEndpoints({
  endpoints: (builder) => ({
    getPrivacy: builder.query<any, void>({
      query: () => {
        return {
          url: '/manage/get-privacy-policy',
          method: 'GET',
        }
      },
    }),
  }),
})

export const { useGetPrivacyQuery } = privacyApis

export default privacyApis
