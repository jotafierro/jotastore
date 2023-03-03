import { Link } from 'react-router-dom'

import Logo from '@/components/Logo/Logo'

import './Brand.scss'

const Brand = () => (
  <Link to='/' className='brand-container'>
    <Logo />
    <span>JotaStore</span>
  </Link>
)

export default Brand
