import './loginForm.css';
import { useRef } from 'react';

function LoginForm({ setActiveForm, handleLogin }) {

    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        handleLogin(username, password);
    }

  return (
    <section className="login">
        <h1 className="login__title">Login</h1>
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="username" className="login-form__label">Username</label>
            <input type="text" id="username" ref={usernameRef} className="login-form__input" required />

            <label htmlFor="password" className="login-form__label">Password</label>
            <input type="password" id="password" ref={passwordRef} className="login-form__input" required />

            <button type="submit" className="login-form__button">Login</button>
            <p className="login-form__text">Don't have an account? <span className="login-form__link" onClick={ () => setActiveForm('register')}>Sign up</span></p>
        </form>
    </section>
  )
}

export default LoginForm;
