import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import { selectCartItems, selectTotalPrice } from '../../redux/slices/cartSlice';
import styles from './Cart.module.css';

const Cart = () => {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);

  return (
    <div className={styles.cart}>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </ul>
      )}
      <h3>Total: ${totalPrice.toFixed(2)}</h3>
    </div>
  );
};

export default Cart;
