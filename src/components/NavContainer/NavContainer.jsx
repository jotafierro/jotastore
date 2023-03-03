import NavLink from '@/components/NavLink/NavLink'

import './NavContainer.scss'

const links = [{
  "id": 1,
  "to": "/jotastore/category/smartphones",
  "name": "Smartphones"
}, {
  "id": 2,
  "to": "/jotastore/category/laptops",
  "name": "Laptops"
}, {
  "id": 3,
  "to": "/jotastore/category/fragrances",
  "name": "Fragrances"
}, {
  "id": 4,
  "to": "/jotastore/category/skincare",
  "name": "Skincare"
}, {
  "id": 5,
  "to": "/jotastore/category/groceries",
  "name": "Groceries"
}]


const NavContainer = () => (
  <nav className='nav-container'>
    {links.map(({id, to, name}) => (
      <NavLink key={id} to={to} name={name} />
    ))}
  </nav>
)

export default NavContainer
