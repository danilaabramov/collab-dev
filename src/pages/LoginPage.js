import React, {useState} from 'react';

function LoginPage() {
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isFocused1, setIsFocused1] = useState(false);
    const [isFocused2, setIsFocused2] = useState(false);

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // submit registration data to server
    };

    return (
        <div className="registration-form-container">
            <form className="registration-form" onSubmit={handleSubmit}>
                <div className={isFocused1 ? "active-registration-form__group" : "registration-form__group"}>
                    <label className="registration-form__label" htmlFor="email">Email:</label>
                    <input className="registration-form__input"
                           onFocus={() => setIsFocused1(true)}
                           onBlur={() => setIsFocused1(false)}
                           type="email" id="email" value={email}
                           onChange={handleEmailChange}/>
                </div>
                <div className={isFocused2 ? "active-registration-form__group" : "registration-form__group"}>
                    <label className="registration-form__label" htmlFor="password">Пароль:</label>
                    <input className="registration-form__input"
                           onFocus={() => setIsFocused2(true)}
                           onBlur={() => setIsFocused2(false)}
                           type="password" id="password" value={password}
                           onChange={handlePasswordChange}/>
                </div>
                <button className="registration-form__submit" type="submit">Войти</button>
            </form>
        </div>
    );
}

export default LoginPage;
