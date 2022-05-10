import { configureStore } from '@reduxjs/toolkit';
import motoSlice from './motoSlice';

export default configureStore({
  reducer: { moto: motoSlice },
});
