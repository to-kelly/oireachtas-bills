import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import { Bill, BillResponse } from "@/types/Bills";

// I didn't have time to add query params to this to filter the API
export const billsAPI = createApi({
  reducerPath: "billsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.oireachtas.ie/v1/",
  }),
  endpoints: (builder) => ({
    getBills: builder.query<Bill[], string>({
      query: () => `legislation`,
      transformResponse: (baseQueryReturnValue: BillResponse) => {
        return baseQueryReturnValue.results.map((result) => result.bill);
      },
    }),
  }),
});

export const { useGetBillsQuery } = billsAPI;
