import { Routes, Route, Navigate } from "react-router-dom";
import CompanyDetails from "./CompanyDetails";
import CompanyList from "./CompanyList";
import Homepage from "./Homepage";
import JobList from "./JobList";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Profile from "./Profile";
import { useContext } from "react";
import userContext from "./userContext";

/** Set up Jobly routes
 *
 * Context
 * - currUser - obj with user info
 *
 * Props
 * - handleLogin()
 * - handleRegister()
 * - handleUpdate()
 *
 * App -> RoutesList
 */
function RoutesList({ handleLogin, handleRegister, handleUpdate }) {
  const { currUser } = useContext(userContext);

  function authRoutes() {
    return (
      <>
        <Route path="/profile" element={<Profile handleUpdate={handleUpdate} />} />
        <Route path="/companies" element={<CompanyList />} />
        <Route path="/companies/:handle" element={<CompanyDetails />} />
        <Route path="/jobs" element={<JobList />} />
      </>
    );
  }

  function unauthRoutes() {
    return (
      <>
        <Route
          path="/login"
          element={<LoginForm handleLogin={handleLogin} />}
        />
        <Route
          path="/signup"
          element={<SignupForm handleRegister={handleRegister} />}
        />
      </>
    );
  }

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      {currUser ? authRoutes() : unauthRoutes()}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;
