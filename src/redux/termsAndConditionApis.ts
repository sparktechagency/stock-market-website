import { baseApis } from './main/baseApis'

const termsAndConditionApis = baseApis.injectEndpoints({
  endpoints: (builder) => ({
    getTermsAndConditions: builder.query<any, void>({
      query: () => ({
        url: '/manage/get-terms-conditions',
        method: 'GET',
      }),
    }),
  }),
  overrideExisting: false,
})

export const { useGetTermsAndConditionsQuery } = termsAndConditionApis
export default termsAndConditionApis
