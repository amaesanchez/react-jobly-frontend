import { useContext } from "react";
import { NavLink } from "react-router-dom";
import userContext from "./userContext";

/** Render navigation bar
 *
 * Props
 * - handleLogout()
 *
 * Context
 * - currUser - obj with user info
 *
 * App -> NavBar
 */
function NavBar({ handleLogout }) {
  const { currUser } = useContext(userContext);

  function logOutUser() {
    handleLogout();
  }

  // could add two functions to return login nav /logout nav
  function authNav() {
    return (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink to="/companies">
            <div className="navbar-link me-2">Companies</div>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/jobs">
            <div className="navbar-link me-2">Jobs</div>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/profile">
            <div className="navbar-link me-2">{currUser.username}</div>
          </NavLink>
        </li>
        <li onClick={logOutUser} className="nav-item">
          <NavLink to="/">
            <div className="navbar-link me-2">Log Out</div>
          </NavLink>
        </li>
      </ul>
    );
  }

  function unauthNav() {
    return (
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <NavLink to="/login">
            <div className="navbar-link me-2">Log In</div>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/signup">
            <div className="navbar-link me-2">Sign Up</div>
          </NavLink>
        </li>
      </ul>
    );
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink to="/">
            <div className="navbar-brand">Jobly</div>
          </NavLink>
          {currUser ? authNav() : unauthNav()}
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
