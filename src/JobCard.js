import { useContext } from "react";
import userContext from "./userContext";

/** Render job card
 *
 * Context
 * -handleApply, currUser
 *
 * Props
 * - job - {companyHandle, companyName, equity, id, salary, title}
 *
 * JobCardList -> JobCard
 */

function JobCard({ job, notify }) {
  const { handleApply, currUser } = useContext(userContext);

  function handleApplyToJob(evt) {
    console.log("hello")
    notify(job.title)
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
