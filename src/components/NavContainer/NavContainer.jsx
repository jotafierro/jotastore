import NavLink from '../NavLink/NavLink'
import './NavContainer.scss'

const links = [{
  "id": 1,
  "to": "http://dummyimage.com/182x100.png/dddddd/000000",
  "name": "Smartphones"
}, {
  "id": 2,
  "to": "http://dummyimage.com/136x100.png/cc0000/ffffff",
  "name": "Basic Industries"
}, {
  "id": 3,
  "to": "http://dummyimage.com/172x100.png/ff4444/ffffff",
  "name": "Health Care"
}, {
  "id": 4,
  "to": "http://dummyimage.com/174x100.png/dddddd/000000",
  "name": "Finance"
}, {
  "id": 5,
  "to": "http://dummyimage.com/230x100.png/dddddd/000000",
  "name": "Consumer Services"
}]


const NavContainer = () => (
  <nav className='nav-container'>
    {links.map(({id, to, name}) => (
      <NavLink key={id} to={to} name={name} />
    ))}
  </nav>
)

export default NavContainer
