import axios from 'axios';
import { initialState, state } from '../Components/TestHelper/testHelper';
import motoSlice, { fetchMotoData } from './motoSlice';

describe('motoSlice', () => {
  it('with empty state', () => {
    const initialStateMotoSlice = { ...initialState };
    expect(motoSlice(undefined, fetchMotoData())).toEqual(
      initialStateMotoSlice
    );
  });
  it('state loading', () => {
    const initialStateMotoSlice = { ...initialState };
    initialStateMotoSlice.loading = true;
    expect(motoSlice(undefined, fetchMotoData.pending)).toEqual(
      initialStateMotoSlice
    );
  });
  it('state loaded', () => {
    const initialStateMotoSlice = { ...initialState };
    initialStateMotoSlice.loading = false;
    initialStateMotoSlice.moto = [...state.moto.moto];
    initialStateMotoSlice.page = [...state.moto.page];
    expect(motoSlice(undefined, fetchMotoData.fulfilled(state.moto))).toEqual(
      initialStateMotoSlice
    );
  });
  it('state error', () => {
    const initialStateMotoSlice = { ...initialState };
    const errorState = new Error('Error State');
    initialStateMotoSlice.loading = false;
    initialStateMotoSlice.error = errorState;

    expect(
      motoSlice(undefined, fetchMotoData.rejected(errorState)).error.error
        .message
    ).toEqual(initialStateMotoSlice.error.message);
  });
});
