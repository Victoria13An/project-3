import React from 'react';

function ProductCard({ product, addToCart }) {
  return (
    <article className="product-card" role="listitem">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p className="price">Цена: {product.price} ₽</p>
      <button onClick={() => addToCart(product.id)}>Добавить в корзину</button>
    </article>
  );
}

export default ProductCard;