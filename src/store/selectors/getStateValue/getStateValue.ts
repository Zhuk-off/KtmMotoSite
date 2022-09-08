export const getStateValue = (
  state: IState | undefined
): IMoto[] | IMotoState =>
  state?.moto || {
    loading: false,
    error: null,
    moto: [],
    page: [],
  }
