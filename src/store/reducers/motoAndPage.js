import {
  FETCH_MOTO_DATA_ERROR,
  FETCH_MOTO_START,
  FETCH_MOTO_SUCCESS,
} from '../actions/actionTypes';

const initialState = {
  loading: false,
  error: null,
  moto: [],
  page: [],
};

export default function generalReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_MOTO_START:
      return {
        ...state,
        loading: true,
      };
    case FETCH_MOTO_SUCCESS:
      return {
        ...state,
        loading: false,
        moto: action.motoData.moto,
        page: action.motoData.page,
      };
    case FETCH_MOTO_DATA_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
}
