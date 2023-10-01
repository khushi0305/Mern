import React from 'react'
import useCartContext from '../CartContext'

const CartPage = () => {
    const {cartItems, removeItemFromCart} = useCartContext();

    const displayCartItems = () => {
      return <table className='table'>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price</th>
            <th>Rating</th>
          </tr>
        </thead>
        <tbody>
          {
            cartItems.map((item) => (
                <tr>
                  <td>
                    <img height={75} src={item.image} alt=''/>
                  </td>
                  <td>{item.brand} {item.model}</td>
                  <td>{item.price}</td>
                  <td>{item.rating}</td>
                </tr>
            ))
          }
        </tbody>
      </table>
    }
  return (
    <div>
        <div className='container py-5'>
          {displayCartItems()}
        </div>
    </div>
  )
}

export default CartPage;