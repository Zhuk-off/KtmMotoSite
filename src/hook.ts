import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux'

import type { RootState, AppDispatch } from './store/store'

// это будут те же функции, только они будут типизированны. т.е. мы не будем использовать useDispatch и useSelector,
export const useAppDispatch = () => useDispatch<AppDispatch>()

/**будте знать все о структуре нашего приложения */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
