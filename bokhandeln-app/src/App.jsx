import './App.css'
import Header from './components/header/Header';
import LoginForm from './components/loginForm/LoginForm';
import ProductList from './components/productList/ProductList';
import { useState } from 'react';
import RegisterForm from './components/registerForm/RegisterForm';
import users from './data/users';

function App() {
  const [cartBalance, setCartBalance] = useState(0);
  const [user, setUser] = useState(null);
  const [userList, setUserList] = useState(users);
  const [activeForm, setActiveForm] = useState('login');

  const decreaseCartBalance = () => {
    if(cartBalance > 0) setCartBalance(c => c - 1);
  }

  const increaseCartBalance = () => {
    setCartBalance(c => c + 1);
  }

  const handleLogin = (username, password) => {
    const user = userList.find(user => user.username === username && user.password === password);
    if (user) {
      setUser(user);
      setActiveForm('productList');
    } else {
      alert('Invalid username or password');
    }
  }

  const handleRegister = (username, password) => {
    const existingUser = userList.find(user => user.username === username);
    if (existingUser) {
      alert('Username already exists');
    } else {
      const newUser = { id: userList.length + 1, username, password };
      setUserList([...userList, newUser]);
      setActiveForm('login');
    }
  }

  const handleLogout = () => {
    setUser(null);
    setActiveForm('login');
  }

  return (
    <div className="app">
      {
        user
        ? 
        <>
          <Header handleLogout={handleLogout} cartBalance={cartBalance} />
          <ProductList
              decreaseCartBalance={decreaseCartBalance}
              increaseCartBalance={increaseCartBalance} />
        </>
        :
        (
          activeForm === 'login' ? (
            <LoginForm 
              setUser={setUser} 
              setActiveForm={setActiveForm}
              handleLogin={handleLogin} 
            />
          ) : (
            <RegisterForm 
              setUser={setUser} 
              setActiveForm={setActiveForm} 
              handleRegister={handleRegister}
            />
          )
        )
      }
    </div>
    
  )
}

export default App;
