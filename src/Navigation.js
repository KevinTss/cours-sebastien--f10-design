import { NavLink } from 'react-router-dom'

function Navigation() {
  // const navStyle = {
  //   color: 'white',
  //   textDecoration: 'none',
  // }

  return (
    <nav>
      <NavLink exact className="Links" activeClassName="current" to="/">
        <h3>JSONPlaceholder</h3>
      </NavLink>
      <ul className="Links">
        <NavLink activeClassName="current" to="/albums">
          <li className="liNav">Albums</li>
        </NavLink>
        <NavLink activeClassName="current" to="/users">
          <li className="liNav">Users</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navigation;
