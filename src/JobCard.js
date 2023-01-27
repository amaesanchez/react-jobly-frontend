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
  const { currUser } = useContext(userContext);

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
