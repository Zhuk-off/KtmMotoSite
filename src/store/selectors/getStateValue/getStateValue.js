export const getStateValue = (state) =>
  state?.moto || {
    loading: false,
    error: null,
    moto: [],
    page: [],
  };
