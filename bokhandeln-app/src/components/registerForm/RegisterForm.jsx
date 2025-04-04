import './registerForm.css';
import { useRef } from 'react';

function RegisterForm({setActiveForm, handleRegister}) {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;

        usernameRef.current.value = '';
        passwordRef.current.value = '';
    
        // Assuming you have a function to handle registration logic
        handleRegister(username, password);
    }

  return (
    <section className="register">
        <h1 className="register__title">Register</h1>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="username" className="register-form__label">Username</label>
            <input type="text" id="username" ref={usernameRef} className="register-form__input" required />

            <label htmlFor="password" className="register-form__label">Password</label>
            <input type="password" id="password" ref={passwordRef} className="register-form__input" required />

            <button type="submit" className="register-form__button">Register</button>
            <p className="register-form__text">Already have an account? <span className="register-form__link" onClick={() => setActiveForm('login')}>Log in</span></p>
        </form>
    </section>
  )
}

export default RegisterForm;