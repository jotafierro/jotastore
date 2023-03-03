import Brand from '@/components/Brand/Brand'
import CartWidget from '@/components/CartWidget/CartWidget'
import NavContainer from '@/components/NavContainer/NavContainer'

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
