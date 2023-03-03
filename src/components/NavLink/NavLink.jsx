import './NavLink.scss'
import { Link } from 'react-router-dom';

const NavLink = ({ to, name }) => (
  <Link
    alt={name}
    className="nav-link"
    to={to}
    >
      {name}
  </Link>
)

export default NavLink
