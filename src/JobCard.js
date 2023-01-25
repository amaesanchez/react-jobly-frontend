/** Render job card
 *
 * Props
 * - job - {companyHandle, companyName, equity, id, salary, title}
 *
 * JobCardList -> JobCard
 */

function JobCard({ job }) {
  return (
    <div className="JobCard card">
      <h4>{job.title}</h4>
      <p>{job.companyName}</p>
      {job.salary ? (
        <p>
          Salary:{" "}
          {job.salary.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </p>
      ) : (
        <></>
      )}
      {job.equity > 0 ? <p>Equity: {job.equity}</p> : <></>}
    </div>
  );
}

export default JobCard;
