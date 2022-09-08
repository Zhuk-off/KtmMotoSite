import { configureStore } from '@reduxjs/toolkit'
import motoSlice from './motoSlice'

const store = configureStore({
  reducer: { moto: motoSlice },
})

export default store

// are needed to work correctly with hooks to make custom hooks based on the main
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
