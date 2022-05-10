import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchMotoData = createAsyncThunk(
  'moto/fetchMotoData',
  async function (_, rejectWithValue) {
    try {
      const response = await axios.get(
        'https://ktmmoto-8b132-default-rtdb.europe-west1.firebasedatabase.app/moto/state.json'
      );
      const data = response.data;

      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const motoSlice = createSlice({
  initialState: { loading: false, error: null, moto: [], page: [] },
  name: 'moto',
  reducers: {},

  extraReducers: {
    [fetchMotoData.pending]: (state) => {
      state.loading = true;
    },
    [fetchMotoData.fulfilled]: (state, motoData) => {
      state.loading = false;
      state.moto = motoData.payload.moto;
      state.page = motoData.payload.page;
    },
    [fetchMotoData.rejected]: (state, e) => {
      state.loading = false;
      state.error = e;
    },
  },
});

export default motoSlice.reducer;
// export const {} = motoSlice.actions;
