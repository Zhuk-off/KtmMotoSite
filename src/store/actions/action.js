import axios from 'axios';
import {
  FETCH_MOTO_DATA_ERROR,
  FETCH_MOTO_START,
  FETCH_MOTO_SUCCESS,
} from './actionTypes';

export function fetchMotoData() {
  return async (dispatch) => {
    dispatch(fetchMotoStart());
    try {
      const response = await axios.get(
        'https://ktmmoto-8b132-default-rtdb.europe-west1.firebasedatabase.app/moto/state.json'
      );
      const motoData = response.data;

      dispatch(fetchMotoSuccess(motoData));
    } catch (e) {
      dispatch(fetchMotoDataError(e));
    }
  };
}

export function fetchMotoStart() {
  return {
    type: FETCH_MOTO_START,
  };
}
export function fetchMotoSuccess(motoData) {
  return {
    type: FETCH_MOTO_SUCCESS,
    motoData,
  };
}
export function fetchMotoDataError(e) {
  return {
    type: FETCH_MOTO_DATA_ERROR,
    error: e,
  };
}
