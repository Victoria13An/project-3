import {useState} from 'react';

const SixDigitOrLetterCodeInput = ({ onComplete }) => {
  const [code, setCode] = useState('');

  const handleChange = (e) => {
    const val = e.target.value;
    // Проверяем длину и что все символы - буквы или цифры
    const isValid = val.length <= 6 && [...val].every(
      char => (char >= '0' && char <= '9') || (char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')
    );
    if (isValid) {
      setCode(val);
      if (val.length === 6) {
        onComplete(val);
      }
    }
  };

  return (
    <input
      type="text"
      maxLength={6}
      value={code}
      onChange={handleChange}
      placeholder="Введите код (цифры и буквы)"
    />
  );
};

export default SixDigitOrLetterCodeInput;