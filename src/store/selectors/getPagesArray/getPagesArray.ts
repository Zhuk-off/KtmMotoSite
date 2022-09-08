export const getPagesArray = (
  state: IState | undefined
): IPage[] | IMotoState => {
  return (
    state?.page || {
      loading: false,
      error: null,
      moto: [],
      page: [],
    }
  )
}
