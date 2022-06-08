import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchAllAPI } from './homeApi';

const initialState = {};

export const fetchAll = createAsyncThunk(
  'home/fethAll',
  async (page) => {
    const res = await fetchAllAPI(page);
    return res;
  }
);

export const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAll.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

// export const {  } = homeSlice.actions;

export default homeSlice.reducer;
