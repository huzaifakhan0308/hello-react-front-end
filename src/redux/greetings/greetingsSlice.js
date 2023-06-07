import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getGreetings = createAsyncThunk(
  'greetings',
  async () => {
    const response = await axios.get('http://[::1]:3000/api/v1/greetings');
    return response.data;
  },
);

const greetingsSlice = createSlice({
  name: 'detail',
  initialState: {},
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getGreetings.fulfilled, (state, action) => action.payload);
  },
});

export default greetingsSlice;
