import { useContext } from "react";
import userContext from "./userContext";

/** Render job card
 *
 * Props
 * - job - {companyHandle, companyName, equity, id, salary, title}
 *
 * JobCardList -> JobCard
 */

//TODO: have applied button
// should i prop drill handleApply()
// should the state for apply/applied be held here
function JobCard({ job }) {
  const { handleApply, currUser } = useContext(userContext);

  function handleApplyToJob(evt) {
    handleApply(job.id);
  }
  return (
    <div className="JobCard bg-light rounded p-2 m-3">
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
      {job.equity > 0 && <p>Equity: {job.equity}</p>}
      <div>
        <button
          className="btn btn-primary"
          onClick={handleApplyToJob}
          disabled={currUser.applications.includes(job.id)}
        >
          {currUser.applications.includes(job.id) ? "Applied" : "Apply"}
        </button>
      </div>
    </div>
  );
}

export default JobCard;
