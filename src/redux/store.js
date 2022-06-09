import { configureStore } from '@reduxjs/toolkit';
import { homeSlice } from '../components/Home';

export const store = configureStore({
  reducer: {
    home: homeSlice.reducer,
  },
});
