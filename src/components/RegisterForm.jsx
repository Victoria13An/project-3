import {useState} from 'react';
import SixDigitOrLetterCodeInput from './SixDigitOrLetterCodeInput';

export function RegisterForm() {
	const [code, setCode] = useState('');
	
	 const handleCodeComplete = (enteredCode) => {
    setCode(enteredCode);
    console.log('Введенный код:', enteredCode);
  };
	
	
	return (
		<div className="form-box hidden" id="register-form">
			<h2>Регистрация</h2>
			<form>
				<label htmlFor="reg-name">Имя:</label>
				<input type="text" id="reg-name" name="reg-name" required />

				<label htmlFor="reg-email">Email:</label>
				<input type="email" id="reg-email" name="reg-email" required />

				<label htmlFor="reg-password">Пароль:</label>
				<input
					type="password"
					id="reg-password"
					name="reg-password"
					required
				/>

				 <label htmlFor="reg-code">Код:</label>
        <SixDigitOrLetterCodeInput onComplete={handleCodeComplete} />

        {/* Для взаимодействия с code, например, скрыто */}
        {/* <input type="hidden" name="reg-code" value={code} /> */}

        {/* Можно отображать введённый код */}
        {code.length === 6 && (
          <div>
            Код введён: {code}
          </div>
        )}

				<button type="submit">Зарегистрироваться</button>
			</form>
		</div>
	);
}
