import { AppDispatch, RootState } from '../store'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

// for exports and ffor disatching the things


export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
