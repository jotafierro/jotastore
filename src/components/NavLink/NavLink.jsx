import './NavLink.scss'

const NavLink = ({ to, name }) => (
  <a
    alt={name}
    className="nav-link"
    href={to}
    rel="noreferrer"
    target='_blank'
    >
      {name}
  </a>
)

export default NavLink
