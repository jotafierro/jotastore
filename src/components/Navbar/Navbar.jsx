import Brand from '../Brand/Brand'
import CartWidget from '../CartWidget/CartWidget'
import NavContainer from '../NavContainer/NavContainer'
import './Navbar.scss'

const Navbar = () => {
  return (
    <header className='header'>
      <Brand />
      <NavContainer />
      <CartWidget qty={5} />
    </header>
  )
}

export default Navbar
