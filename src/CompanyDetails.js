import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";
import JobCardList from "./JobCardList";
import Loading from "./Loading";

/** Render company details and list of related jobs
 *
 * Params
 * - handle - company handle
 *
 * State
 * - company - holds company object and isLoading state
 *
 * Routes -> CompanyDetails -> JobCardList
 */
function CompanyDetails() {
  const { handle } = useParams();
  const [company, setCompany] = useState(null);

  useEffect(
    function fetchCompany() {
      async function getCompany() {
        const company = await JoblyApi.getCompany(handle);
        setCompany(company);
      }

      getCompany();
    },
    [handle]
  );

  if (!company) return <Loading />;

  return (
    <div className="CompanyDetails list">
      <h1>{company.name}</h1>
      <p>{company.description}</p>
      {company.jobs ? (
        <JobCardList jobs={company.jobs} />
      ) : (
        <p>No jobs available.</p>
      )}
    </div>
  );
}
export default CompanyDetails;
