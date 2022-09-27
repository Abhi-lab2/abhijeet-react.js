import React, { FC, useState } from 'react'
import './cartProduct.css'
import { Button, ButtonGroup, Fab } from '@mui/material'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import { CartItem } from '../../types'
import { useAppDispatch } from '../../hooks'
import {
   decreaseCount,
   increaseCount,
   removeProducts,
   toggleItemRemoved,
} from '../../store/cart/cart.slice'

interface CartItemProps {
   products: CartItem
}

const CartProducts: FC<CartItemProps> = ({ products }) => {
   const [count, setCount] = useState(products.quantity)
   const dispatch = useAppDispatch()
   const handleRemove = () => {
      dispatch(removeProducts(products))
      dispatch(toggleItemRemoved(true))
   }
   const increase = () => {
      setCount((count) => count + 1)
      dispatch(increaseCount(products))
   }
   const decrease = () => {
      if (count > 1) {
         setCount((count) => count - 1)
         dispatch(decreaseCount(products))
      }
   }
   return (
      <div className={'cartItem'}>
         <div className={'cartItemInfo'}>
            <div className={'cartItemImgWrapper'}>
               <img
                  className={'cartItemImg'}
                  src={products.avatar}
                  alt={products.description}
               />
            </div>

            <div className={'cartItemDescription'}>
               <h4>{products.description}</h4>
               <h2 className={'cartItemPrice'}>{products.products.price} $</h2>
               <div className={'cartItemCount'}>
                  <ButtonGroup>
                     <Button onClick={decrease}>
                        <RemoveIcon fontSize="small" />
                     </Button>
                     <Button onClick={increase}>
                        <AddIcon fontSize="small" />
                     </Button>
                  </ButtonGroup>
                  <span className={'cartItemCountNumber'}>{count}</span>
               </div>
            </div>
         </div>
         <div className={'cartItemRemove'}>
            <Fab
               onClick={handleRemove}
               size="small"
               color="error"
               aria-label="add"
            >
               <DeleteIcon />
            </Fab>
         </div>
      </div>
   )
}

export default CartProducts
