import { useState, useEffect } from "react";
import JoblyApi from "./api";

import JobCardList from "./JobCardList";
import SearchForm from "./SearchForm";
import Loading from "./Loading";

/** Render list of jobs
 *
 * State
 * - jobs - holds job objects and isLoading state
 *
 * Routes -> JobList
 */
// look at comments in company list
function JobList() {
  const [jobs, setJobs] = useState(null);

  useEffect(function fetchJobs() {
    getJobs();
  }, []);

  async function getJobs(data) {
    const jobs = await JoblyApi.getJobs(data);
    setJobs(jobs);
  }

  if (!jobs) return <Loading />;

  return (
    <div className="JobList d-flex justify-content-center mt-4">
      <div className="col-lg-8 col-12">
        <SearchForm searchFor={getJobs} />
        <div className="JobList-jobs">
          {jobs.length === 0 ? (
            <p>No jobs found.</p>
          ) : (
            <JobCardList jobs={jobs} />
          )}
        </div>
      </div>
    </div>
  );
}
export default JobList;
