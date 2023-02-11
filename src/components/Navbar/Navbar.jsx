import Brand from '../Brand/Brand'
import NavContainer from '../NavContainer/NavContainer'
import './Navbar.scss'

const Navbar = () => {
  return (
    <header className='header'>
      <Brand />
      <NavContainer />
      <div>carrito</div>
    </header>
  )
}

export default Navbar
