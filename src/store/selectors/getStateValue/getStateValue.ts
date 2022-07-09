export const getStateValue = (state: state | undefined): moto[] | motoState =>
  state?.moto || {
    loading: false,
    error: null,
    moto: [],
    page: [],
  }
