/** Render company card
 *
 * Props
 * - company - {name, handle, logoUrl, name, numEmployees}
 *
 * CompanyList -> CompanyCard
 */

function CompanyCard({ company }) {
  return (
    <div className="CompanyCard card bg-light p-3">
      <div className="d-flex justify-content-between">
        <h4>{company.name}</h4>
        {company.logoUrl ? (
          <img className="rounded" src={company.logoUrl} alt={`${company.name}`}></img>
        ) : (
          <></>
        )}
      </div>
      <p>{company.description}</p>
    </div>
  );
}
export default CompanyCard;
