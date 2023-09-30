import React from 'react'
import useCartContext from '../CartContext'

const CartPage = () => {
    const {cartItems} = useCartContext();
  return (
    <div>
        <div className='container'></div>
    </div>
  )
}

export default CartPage;