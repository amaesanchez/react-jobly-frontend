import { useState, useEffect } from "react"

function CompanyDetails() {
  const [company, setCompany] = useState({
    company: null,
    isLoading: true
  })




  if (company.isLoading) return <h1>Loading...</h1>

  return (
    <div className="CompanyDetails">
      <h1>CompanyDetails here</h1>
    </div>
  )
}
export default CompanyDetails;
