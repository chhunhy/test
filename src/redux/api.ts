import { BaseQueryApi, FetchArgs, createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from './store';
import { setAccessToken, clearAuth } from './features/auth/authSlice';

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_GRADESBOT_API_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReAuth = async (args,api,extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result.error?.status === 401) {
    const refreshResult = await fetch(`${process.env.NEXT_PUBLIC_GRADESBOT_API_URL}/refresh`, {
      method: 'POST',
      credentials: 'include',
    });
    if (refreshResult.ok) {
      const data = await refreshResult.json();
      api.dispatch(setAccessToken(data.accessToken));
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(clearAuth());
    }
  }
  return result;
};

export const gradesbotApi = createApi({
  reducerPath: 'gradesbotApi',
  baseQuery: baseQueryWithReAuth,
  endpoints: () => ({}),
});
