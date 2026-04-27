import React from 'react';

function OrderForm({ onClose }) {
	const handleSubmit = (e) => {
		e.preventDefault();
		alert("Заказ оформлен!");
		onClose();
	};

	return (
		<section className="order-form" role="dialog" aria-modal="true">
			<h2>Оформление заказа</h2>
			<form onSubmit={handleSubmit}>
				<label>
					Имя:
					<input type="text" required />
				</label>
				<label>
					Фамилия:
					<input type="text" required />
				</label>
				<label>
					Адрес доставки:
					<input type="text" required />
				</label>
				<label>
					Номер телефон:
					<input type="tel" required />
				</label>
				<button type="submit">Отправить заказ</button>
				<button type="button" onClick={onClose}>
					Отмена
				</button>
			</form>
		</section>
	);
}

export default OrderForm;
