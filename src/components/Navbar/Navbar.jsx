import Logo from '../Logo/Logo'
import './Navbar.scss'

const Navbar = () => {
  return (
    <header className='header'>
      <div className='header__brand-container'>
        <Logo />
        <span>JotaStore</span>
      </div>
      <nav>links</nav>
      <div>carrito</div>
    </header>
  )
}

export default Navbar
