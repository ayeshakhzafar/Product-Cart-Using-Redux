import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/slices/cartSlice';
import styles from './Products.module.css';

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <li className={styles.productItem}>
      <span>{product.name}</span>
      <span>${product.price.toFixed(2)}</span>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </li>
  );
};

export default ProductItem;
