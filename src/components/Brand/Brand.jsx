import { Link } from 'react-router-dom'

import Logo from '../Logo/Logo'
import './Brand.scss'

const Brand = () => (
  <Link to='/' className='brand-container'>
    <Logo />
    <span>JotaStore</span>
  </Link>
)

export default Brand
