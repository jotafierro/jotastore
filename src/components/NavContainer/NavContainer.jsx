import NavLink from '../NavLink/NavLink'
import './NavContainer.scss'

const links = [{
  "id": 1,
  "to": "/category/smartphones",
  "name": "Smartphones"
}, {
  "id": 2,
  "to": "/category/laptops",
  "name": "Laptops"
}, {
  "id": 3,
  "to": "/category/fragrances",
  "name": "Fragrances"
}, {
  "id": 4,
  "to": "/category/skincare",
  "name": "Skincare"
}, {
  "id": 5,
  "to": "/category/groceries",
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
