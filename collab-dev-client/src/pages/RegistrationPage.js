import React, {useState} from 'react';

function RegistrationPage() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [isFocused1, setIsFocused1] = useState(false);
    const [isFocused2, setIsFocused2] = useState(false);
    const [isFocused3, setIsFocused3] = useState(false);
    const [isFocused4, setIsFocused4] = useState(false);

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleSurnameChange = (event) => {
        setSurname(event.target.value);
    };

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
                    <label className="registration-form__label" htmlFor="name">Имя:</label>
                    <input className="registration-form__input"
                           onFocus={() => setIsFocused1(true)}
                           onBlur={() => setIsFocused1(false)}
                           type="text" id="name" value={name}
                           onChange={handleNameChange}/>
                </div>
                <div className={isFocused2 ? "active-registration-form__group" : "registration-form__group"}>
                    <label className="registration-form__label" htmlFor="surname">Фамилия:</label>
                    <input className="registration-form__input"
                           onFocus={() => setIsFocused2(true)}
                           onBlur={() => setIsFocused2(false)}
                           type="text" id="surname" value={surname}
                           onChange={handleSurnameChange}/>
                </div>
                <div className={isFocused3 ? "active-registration-form__group" : "registration-form__group"}>
                    <label className="registration-form__label" htmlFor="password">Пароль:</label>
                    <input className="registration-form__input"
                           onFocus={() => setIsFocused3(true)}
                           onBlur={() => setIsFocused3(false)}
                           type="password" id="password" value={password}
                           onChange={handlePasswordChange}/>
                </div>
                <div className={isFocused4 ? "active-registration-form__group" : "registration-form__group"}>
                    <label className="registration-form__label" htmlFor="email">Email:</label>
                    <input className="registration-form__input"
                           onFocus={() => setIsFocused4(true)}
                           onBlur={() => setIsFocused4(false)}
                           type="email" id="email" value={email}
                           onChange={handleEmailChange}/>
                </div>
                <button className="registration-form__submit" type="submit">Зарегистрироваться</button>
            </form>
        </div>
    );
}

export default RegistrationPage;
