import { useMemo } from 'react';
import CartItem from '../../components/CartItem/CartItem';
import './Cart.css';

function Cart({ cart, incrementItem, decrementItem }) {
  const subtotal = useMemo(
    () => cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cart],
  );

  const totalItems = useMemo(
    () => cart.reduce((sum, item) => sum + item.quantity, 0),
    [cart],
  );

  return (
    <section className="cart-shell">
      <div className="cart-header">
        <div>
          <p className="eyebrow">Cart</p>
          <h2>Your streetwear cart</h2>
        </div>
        <div className="cart-summary">
          <span>{totalItems} items</span>
          <span>Subtotal: ${subtotal.toFixed(2)}</span>
        </div>
      </div>

      {cart.length === 0 ? (
        <div className="cart-empty card-shadow">
          <h3>Your cart is empty.</h3>
          <p>Browse the shop and add your next streetwear drop.</p>
        </div>
      ) : (
        <div className="cart-list">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} onIncrement={incrementItem} onDecrement={decrementItem} />
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="cart-footer card-shadow">
          <div>
            <p className="text-muted">Subtotal</p>
            <h3>${subtotal.toFixed(2)}</h3>
          </div>
          <button className="primary-button">Checkout</button>
        </div>
      )}
    </section>
  );
}

export default Cart;
