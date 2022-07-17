import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchMotoData = createAsyncThunk<
  IMotoState,
  void,
  { rejectValue: string }
>(
  'moto/fetchMotoData',
  async function (_, rejectWithValue): Promise<IMotoState> {
    const response = await axios.get(
      'https://ktmmoto-8b132-default-rtdb.europe-west1.firebasedatabase.app/moto/state.json'
    )
    const data: IMotoState = response.data
    return data
  }
)

const initialState: IMotoState = {
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
