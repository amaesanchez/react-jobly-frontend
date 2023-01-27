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
 * - companies - holds company objects and isLoading state
 *
 * Routes -> CompanyList -> CompanyCard/SearchForm
 */

function CompanyList() {
  const [companies, setCompanies] = useState(null);

  useEffect(function fetchCompanies() {
    getCompanies();
  }, []);

  async function getCompanies(data) {
    const companiesRes = await JoblyApi.getCompanies(data);
    setCompanies(companiesRes);
  }

  if (!companies) return <Loading />;

  return (
    <div className="CompanyList d-flex justify-content-center mt-4">
      <div className="col-lg-8 col-12">
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
    </div>
  );
}
export default CompanyList;
