/** Render job card
 *
 * Props
 * - job - {companyHandle, companyName, equity, id, salary, title}
 *
 * JobCardList -> JobCard
 */

//TODO: have applied button 
function JobCard({ job }) {
  return (
    <div className="JobCard card bg-light p-2">
      <h4>{job.title}</h4>
      <p>{job.companyName}</p>
      <p>
        Salary:{" "}
        {job.salary > 0
          ? job.salary.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })
          : "Salary not available."}
      </p>
      {job.equity > 0 ? <p>Equity: {job.equity}</p> : <></>}
    </div>
  );
}

export default JobCard;
