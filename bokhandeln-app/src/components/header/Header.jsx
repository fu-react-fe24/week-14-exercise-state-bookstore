import Cart from '../cart/Cart';
import Logo from '../logo/Logo';
import './header.css';

function Header({ cartBalance, handleLogout }) {
  return (
    <header className="page-header">
        <Logo />
        <button onClick={handleLogout}>Logout</button>
        <Cart cartBalance={ cartBalance } />
    </header>
  )
}

export default Header;
