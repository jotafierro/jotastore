import { Link } from 'react-router-dom';

import CenterContainer from '@/components/CenterContainer/CenterContainer';

import './Page404.scss'

const Page404 = () => {
  return (
    <CenterContainer>
      <div className='page-404'>
        <h1>404</h1>
        <img src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="404_image" />
        <p>Look like you're lost</p>
        <p>the page you are looking for not available!</p>
        <Link to='/jotastore/'>Go to HOME!</Link>
      </div>
    </CenterContainer>
  )
}

export default Page404
