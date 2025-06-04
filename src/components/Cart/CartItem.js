import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, updateQuantity } from '../../redux/slices/cartSlice';
import styles from './Cart.module.css';

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeFromCart({ id: item.id }));
  };

  const handleQuantityChange = (e) => {
    const quantity = parseInt(e.target.value, 10);
    dispatch(updateQuantity({ id: item.id, quantity }));
  };

  return (
    <li className={styles.cartItem}>
      <span>{item.name}</span>
      <span>${item.price.toFixed(2)}</span>
      <input
        type="number"
        min="1"
        value={item.quantity}
        onChange={handleQuantityChange}
      />
      <button onClick={handleRemove}>Remove</button>
    </li>
  );
};

export default CartItem;
