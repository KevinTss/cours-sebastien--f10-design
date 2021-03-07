import { NavLink } from "react-router-dom";

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
        <NavLink activeClassName="current" to="/todo">
          <li className="liNav">Todo</li>
        </NavLink>
        <NavLink activeClassName="current" to="/users">
          <li className="liNav">Users</li>
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navigation;
