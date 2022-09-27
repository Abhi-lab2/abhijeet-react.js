import { AppDispatch } from '../index'
import { errorFetching, startFetching, successFetching } from './products.slice'
import axios from 'axios'
import { IProduct } from '../../types'

export const fetchProducts = () => async (dispatch: AppDispatch) => {
   try {
      dispatch(startFetching())
      const response = await axios.get<IProduct[]>(
         'https://upayments-studycase-api.herokuapp.com/api/products'
      )
      dispatch(successFetching(response.data))
   } catch (e) {
      if (e instanceof Error) {
         dispatch(errorFetching(e.message))
      }
   }
}
