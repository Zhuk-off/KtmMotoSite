import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchMotoData = createAsyncThunk<
  motoState,
  void,
  { rejectValue: string }
>(
  'moto/fetchMotoData',
  async function (_, rejectWithValue): Promise<motoState> {
    const response = await axios.get(
      'https://ktmmoto-8b132-default-rtdb.europe-west1.firebasedatabase.app/moto/state.json'
    )
    const data: motoState = response.data
    return data
  }
)

const initialState: motoState = {
  loading: false,
  error: null,
  moto: [],
  page: [],
}

export const motoSlice = createSlice({
  initialState,
  name: 'moto',
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchMotoData.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchMotoData.fulfilled, (state, motoData) => {
        state.loading = false
        state.moto = motoData.payload.moto
        state.page = motoData.payload.page
      })
      .addCase(fetchMotoData.rejected, (state, e) => {
        state.loading = false
        state.error = e
      })
  },
})

export default motoSlice.reducer
