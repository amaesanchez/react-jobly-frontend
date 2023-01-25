import { useState, useEffect } from "react";
import JoblyApi from "./api";

import JobCardList from "./JobCardList";
import SearchForm from "./SearchForm";

/** Render list of jobs
 *
 * State
 * - filter - set by search form submission
 * - jobs - holds job objects and isLoading state
 *
 * Routes -> JobList
 */

function JobList() {
  const [filter, setFilter] = useState(null);
  const [jobs, setJobs] = useState({
    jobs: null,
    isLoading: true,
  });

  useEffect(
    function fetchJobs() {
      async function getJobsAPI() {
        const jobs = await JoblyApi.getJobs(filter);

        console.debug("jobs", jobs);
        setJobs({
          jobs: jobs,
          isLoading: false,
        });
      }
      getJobsAPI();
    },
    [filter]
  );

  function getJobs(data) {
    setFilter(data);
    setJobs({
      jobs: null,
      isLoading: true,
    });
  }

  if (jobs.isLoading) return <h1>Loading...</h1>;

  return (
    <div className="JobList list">
      <h1>JobList here</h1>
      <SearchForm getData={getJobs} />
      <div className="JobList-jobs">
        <JobCardList jobs={jobs.jobs} />
      </div>
    </div>
  );
}
export default JobList;
