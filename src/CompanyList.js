import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import JoblyApi from "./api";

import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";

/** Render list of companies and search form
 *
 * State
 * - filter - set by search form submission
 * - companies - holds company objects and isLoading state
 *
 * Routes -> CompanyList -> CompanyCard/SearchForm
 */

function CompanyList() {
  const [filter, setFilter] = useState(null);
  const [companies, setCompanies] = useState({
    companies: null,
    isLoading: true,
  });

  useEffect(
    function fetchCompanies() {
      async function getCompaniesAPI() {
        const companies = filter
          ? await JoblyApi.getCompanies(filter)
          : await JoblyApi.getCompanies();

        console.debug("companies", companies);
        setCompanies({
          companies: companies,
          isLoading: false,
        });
      }
      getCompaniesAPI();
    },
    [filter]
  );

  function getCompanies(data) {
    setFilter(data);
    setCompanies({
      companies: null,
      isLoading: true,
    });
  }

  if (companies.isLoading) return <h1>Loading...</h1>;

  return (
    <div className="CompanyList list">
      <h1>CompanyList here</h1>
      <SearchForm getData={getCompanies} />
      <div className="CompanyList-companies">
        {companies.companies.map((company) => (
          <Link
            to={company.handle}
            style={{ textDecoration: "none", color: "black" }}
            key={uuid()}>
            <CompanyCard company={company} />
          </Link>
        ))}
      </div>
    </div>
  );
}
export default CompanyList;
