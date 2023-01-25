import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";
import JoblyApi from "./api";

import CompanyCard from "./CompanyCard";
import SearchForm from "./SearchForm";

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
    <div className="CompanyList">
      <h1>CompanyList here</h1>
      <SearchForm getData={getCompanies} />
      <div className="CompanyList-companies">
        {companies.companies.map((company) => (
          <CompanyCard key={uuid()} company={company} />
        ))}
      </div>
    </div>
  );
}
export default CompanyList;
