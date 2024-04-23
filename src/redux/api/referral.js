const { createApi, fetchBaseQuery } = require('@reduxjs/toolkit/query/react');

// Create the RTK Query API
export const referral = createApi({
  reducerPath: 'referral',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000/referal' }),
    endpoints: (builder) => ({
      createReferralCode: builder.mutation({
        query: (body) => ({
          url: '/referralcodes',
          method: 'POST',
          body,
        }),
      }),

           // New endpoint for fetching user referral details from MongoDB
           getReferralCodeByUser: builder.query({
            query: (userName) => `/user/referralcode/${userName}`, 
          }), 
       
          searchReferralCode: builder.query({
            query: (enterReferralCode) => `referral-codes/${enterReferralCode}`,
          }),
      

          updateReferralPoints: builder.mutation({
            query: (data) => ({
              url: '/update-referral-points',
              method: 'POST',
              body: data,
            }),
          }),
    }),
  });
  
  export const { useCreateReferralCodeMutation, useGetReferralCodeByUserQuery, useRedeemedCodeMutation, useSearchReferralCodeQuery, useUpdateReferralPointsMutation  } = referral;