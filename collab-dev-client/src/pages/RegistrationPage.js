import React, {useState} from 'react';

function RegistrationPage() {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

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
                <div className="registration-form__group">
                    <label className="registration-form__label" htmlFor="username">Имя:</label>
                    <input className="registration-form__input" type="text" id="username" value={name}
                           onChange={handleNameChange}/>
                </div>
                <div className="registration-form__group">
                    <label className="registration-form__label" htmlFor="username">Фамилия:</label>
                    <input className="registration-form__input" type="text" id="username" value={surname}
                           onChange={handleSurnameChange}/>
                </div>
                <div className="registration-form__group">
                    <label className="registration-form__label" htmlFor="password">Пароль:</label>
                    <input className="registration-form__input" type="password" id="password" value={password}
                           onChange={handlePasswordChange}/>
                </div>
                <div className="registration-form__group">
                    <label className="registration-form__label" htmlFor="email">Email:</label>
                    <input className="registration-form__input" type="email" id="email" value={email}
                           onChange={handleEmailChange}/>
                </div>
                <button className="registration-form__submit" type="submit">Зарегистрироваться</button>
            </form>
        </div>
    );
}

export default RegistrationPage;
