import React from 'react';
import { useSelector } from 'react-redux';
import { selectProducts } from '../../redux/slices/productsSlice';
import ProductItem from './ProductItem';
import styles from './Products.module.css';

const ProductList = () => {
  const products = useSelector(selectProducts);

  return (
    <div className={styles.products}>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
