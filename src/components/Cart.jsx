import React from 'react';

function Cart({ cartItems, removeFromCart, openOrderForm }) {
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <aside className="cart" aria-label="Корзина">
      <h2>Корзина</h2>
      <ul role="list">
        {cartItems.map(item => (
          <li key={item.id} className="cart-item">
            <span>{item.name}</span>
            <span className="quantity">x{item.quantity}</span>
            <button onClick={() => removeFromCart(item.id)} aria-label="Удалить">
              Удалить
            </button>
          </li>
        ))}
      </ul>
      <p>Общая сумма: {totalPrice} ₽</p>
      <button onClick={openOrderForm}>Оформить заказ</button>
    </aside>
  );
}

export default Cart;