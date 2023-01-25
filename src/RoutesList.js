import { Routes, Route, Navigate } from "react-router-dom";
import CompanyDetails from "./CompanyDetails";
import CompanyList from "./CompanyList";
import Homepage from "./Homepage";
import JobList from "./JobList";

/** Set up Jobly routes
 *
 * JoblyApp -> RoutesList
 */
function RoutesList() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}/>
      <Route path="/companies" element={<CompanyList />}/>
      <Route path="/companies/:handle" element={<CompanyDetails />}/>
      <Route path="/jobs" element={<JobList />}/>
      <Route path="*" element={<Navigate to="/" />}/>
    </Routes>
  )
}

export default RoutesList;
