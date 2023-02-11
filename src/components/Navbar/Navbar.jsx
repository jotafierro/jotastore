import Brand from '../Brand/Brand'
import CardWidget from '../CardWidget/CardWidget'
import NavContainer from '../NavContainer/NavContainer'
import './Navbar.scss'

const Navbar = () => {
  return (
    <header className='header'>
      <Brand />
      <NavContainer />
      <CardWidget qty={5} />
    </header>
  )
}

export default Navbar
