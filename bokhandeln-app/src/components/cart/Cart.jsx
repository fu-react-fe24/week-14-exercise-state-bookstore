import './cart.css';

function Cart({ cartBalance }) {
  return (
    <p className="cart">
      <span className="cart-text">Cart:</span>
      <span className="cart-amount">{ cartBalance }</span>
    </p>
  )
}

export default Cart;
