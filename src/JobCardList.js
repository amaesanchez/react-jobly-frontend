import JobCard from "./JobCard";
import { v4 as uuid } from "uuid";

/** Map through jobs to render JobCard components
 *
 * Props
 * - jobs - array of job objects
 *
 * JobList/companyDetails -> JobCardList
 */
function JobCardList({ jobs, notify }) {
  return (
    <>
      {jobs.map((job) => (
        <JobCard key={uuid()} job={job} notify={notify}/>
      ))}
    </>
  );
}

export default JobCardList;
