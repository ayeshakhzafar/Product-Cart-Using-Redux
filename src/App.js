import React from 'react';
import ProductList from './components/Products/ProductList';
import Cart from './components/Cart/Cart';
import './index.css';

function App() {
  return (
    <div className="container">
      <h1>Redux Shopping Cart</h1>
      <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))' }}>
        <ProductList />
        <Cart />
      </div>
    </div>
  );
}

export default App;
