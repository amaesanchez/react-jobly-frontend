/**
 *
 * @param {*} param0
 * @returns
 */
function CompanyCard({ company }) {
  console.log(company.logoUrl);

  return (
    <div className="CompanyCard">
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
