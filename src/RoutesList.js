import { Routes, Route, Navigate } from "react-router-dom";
import CompanyDetails from "./CompanyDetails";
import CompanyList from "./CompanyList";
import Homepage from "./Homepage";
import JobList from "./JobList";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Profile from "./Profile";

/** Set up Jobly routes
 *
 * JoblyApp -> RoutesList
 */
function RoutesList({ handleLogin, handleRegister }) {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<LoginForm handleLogin={handleLogin} />} />
      <Route
        path="/signup"
        element={<SignupForm handleRegister={handleRegister} />}
      />
      <Route path="/profile" element={<Profile />} />
      <Route path="/companies" element={<CompanyList />} />
      <Route path="/companies/:handle" element={<CompanyDetails />} />
      <Route path="/jobs" element={<JobList />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;
