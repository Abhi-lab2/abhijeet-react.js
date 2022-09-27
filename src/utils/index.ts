import { IProduct } from '../types'

export const findMaxPrice = (products: IProduct[]) => {
   let max = products[0].price
   products.forEach((product) =>  (max = product.price))
   return max
}
