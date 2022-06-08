import { configureStore } from '@reduxjs/toolkit';
import home from '../components/Home/homeSlice';

export const store = configureStore({
  reducer: {
    home,
  },
});
