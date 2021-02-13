import { NavLink } from 'react-router-dom'

function Navigation() {

  return (
    <nav>
      <NavLink exact className="Links" activeClassName="current" to="/">
        <h3>JSONPlaceholder</h3>
      </NavLink>
      <ul className="Links">
        <NavLink activeClassName="current" to="/posts">
          <li className="liNav">Posts</li>
        </NavLink>
        <NavLink activeClassName="current" to="/comments">
          <li className="liNav">Comments</li>
        </NavLink>
        <NavLink activeClassName="current" to="/albums">
          <li className="liNav">Albums</li>
        </NavLink>
        <NavLink activeClassName="current" to="/photos">
          <li className="liNav">Photos</li>
        </NavLink>
        <NavLink activeClassName="current" to="/todos">
          <li className="liNav">Todos</li>
        </NavLink>
        <NavLink activeClassName="current" to="/users">
          <li className="liNav">Users</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navigation;
