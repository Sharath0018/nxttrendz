import {Link} from 'react-router-dom'

import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let total = 0
      cartList.forEach(each => {
        total += each.price * each.quantity
      })
      return (
        <>
          <div>
            <h1>
              <span className="order-total-label">Order Total:</span> Rs {total}
              /-
            </h1>
            <p>{cartList.length} Items in cart</p>
            <Link to="/products">
              <button type="button">Checkout</button>
            </Link>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)
export default CartSummary
