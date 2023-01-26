import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import JoblyApi from "./api";

import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";
import Loading from "./Loading";

/** Render list of companies and search form
 *
 * State
 * - filter - set by search form submission
 * - companies - holds company objects and isLoading state
 *
 * Routes -> CompanyList -> CompanyCard/SearchForm
 */

function CompanyList() {
  // track companies instead of isLoading to render loading msg
  const [companies, setCompanies] = useState(null);

  // just calls getCompanies
  useEffect(function fetchCompanies() {
    getCompanies();
  }, []);

  // ajax request here instead
  async function getCompanies(data) {
    const companiesRes = await JoblyApi.getCompanies(data);
    console.debug("companies", companiesRes);
    setCompanies(companiesRes);
  }

  if (!companies) return <Loading />;

  return (
    <div className="CompanyList list">
      <h1>Companies</h1>
      <SearchForm searchFor={getCompanies} />
      <div className="CompanyList-companies">
        {companies.length === 0 ? (
          <p>No companies found.</p>
        ) : (
          companies.map((company) => (
            <Link
              to={company.handle}
              style={{ textDecoration: "none", color: "black" }}
              key={uuid()}
            >
              <CompanyCard company={company} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
export default CompanyList;
