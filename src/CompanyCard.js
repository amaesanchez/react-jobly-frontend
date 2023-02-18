/** Render company card
 *
 * Props
 * - company - {name, handle, logoUrl, name, numEmployees}
 *
 * CompanyList -> CompanyCard
 */

function CompanyCard({ company }) {
  return (
    <div className="CompanyCard bg-light rounded p-3 m-3">
      <div className="d-flex justify-content-between">
        <h4>{company.name}</h4>
        {company.logoUrl ? (
          <img className="Logo rounded" src={company.logoUrl} alt={`${company.name}`}></img>
        ) : (
          <></>
        )}
      </div>
        <p className="d-flex float-left m-2">{company.description}</p>
    </div>
  );
}
export default CompanyCard;
