
/** Render company card
 *
 * Props
 * - company - {name, handle, logoUrl, name, numEmployees}
 *
 * CompanyList -> CompanyCard
 */

function CompanyCard({ company }) {

  return (
      <div className="CompanyCard card">
        <h4>{company.name}</h4>
        {company.logoUrl ? (
          <img src={company.logoUrl} alt={`${company.name}`}></img>
        ) : (
          <></>
        )}
        <p>{company.description}</p>
      </div>
  );
}
export default CompanyCard;
