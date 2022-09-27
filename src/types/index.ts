// type interfaces .. types

export interface IProduct {
   id: string
   name: string
   price: number
   description: string
   category: string
   avatar: string
   developerEmail: string
}

export interface CartItem {
   avatar: string
   products: IProduct
   quantity: number
   description: string
}

export enum ProductsFilter {
   FILTER_BY_CATEGORY = 'FILTER_BY_CATEGORY',
   FILTER_BY_PRICE = 'FILTER_BY_PRICE',
   FILTER_BY_SEARCH = 'FILTER_BY_SEARCH',
}
