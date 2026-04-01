export function LoginForm() {
	return (
		<div className="form-box hidden" id="login-form">
			<h2>Вход</h2>
			<form>
				<label htmlFor="login">Логин:</label>
				<input type="text" id="login" name="login" required />

				<label htmlFor="password">Пароль:</label>
				<input type="password" id="password" name="password" required />

				<button type="submit">Войти</button>
			</form>
		</div>
	);
}

//при лог 6-значный код, 6 разных импутов