import { configureStore } from '@reduxjs/toolkit';
import { gradesbotApi } from './api';
import authSlice from './features/auth/authSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      [gradesbotApi.reducerPath]: gradesbotApi.reducer,
      auth: authSlice,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(gradesbotApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
