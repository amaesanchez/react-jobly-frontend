
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
      <p>Salary: {job.salary}</p>
      <p>Equity: {job.equity}</p>
    </div>
  )
}

export default JobCard;
