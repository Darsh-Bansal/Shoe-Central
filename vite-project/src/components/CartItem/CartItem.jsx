import './CartItem.css';

function CartItem({ item, onIncrement, onDecrement }) {
  return (
    <div className="cart-item-shell">
      <div className="cart-item-thumb">
        <img src={item.images[0]} alt={item.name} />
      </div>
      <div className="cart-item-details">
        <p className="cart-item-name">{item.name}</p>
        <p className="cart-item-price">₹{item.price.toFixed(2)}</p>
      </div>
      <div className="cart-item-qty">
        <button onClick={() => onDecrement(item.id)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => onIncrement(item.id)}>+</button>
      </div>
      <div className="cart-item-total">₹{(item.price * item.quantity).toFixed(2)}</div>
    </div>
  );
}

export default CartItem;
