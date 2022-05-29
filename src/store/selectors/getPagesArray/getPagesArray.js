export const getPagesArray = (state) =>
  state?.moto?.page || {
    loading: false,
    error: null,
    moto: [],
    page: [],
  };
