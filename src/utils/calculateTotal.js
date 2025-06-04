export const calculateTotal = (cartItems) =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  