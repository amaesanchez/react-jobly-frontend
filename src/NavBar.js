import { NavLink } from "react-router-dom"

/** Render navigation bar
 *
 * JoblyApp -> NavBar
 */
function NavBar() {
  return (
    <nav className="NavBar">
      <NavLink to="/">Jobly</NavLink>
      <NavLink to="/companies">Companies</NavLink>
      <NavLink to="/jobs">Jobs</NavLink>
    </nav>
  )
}

export default NavBar;
