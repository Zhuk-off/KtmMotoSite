export const getPagesArray = (state: state | undefined): page[] | motoState => {
  return (
    state?.page || {
      loading: false,
      error: null,
      moto: [],
      page: [],
    }
  )
}
