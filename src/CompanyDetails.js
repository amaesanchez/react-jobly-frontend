import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import JoblyApi from "./api";
import JobCardList from "./JobCardList";

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

  const [company, setCompany] = useState({
    company: null,
    isLoading: true,
  });

  useEffect(function fetchCompany() {
    async function getCompany() {
      const company = await JoblyApi.getCompany(handle);
      setCompany({
        company: company,
        isLoading: false,
      });
    }

    getCompany();
  }, [handle]);

  if (company.isLoading) return <h1>Loading...</h1>;

  return (
    <div className="CompanyDetails list">
      <h1>{company.company.name}</h1>
      <p>{company.company.description}</p>
      <JobCardList jobs={company.company.jobs} />
    </div>
  );
}
export default CompanyDetails;
