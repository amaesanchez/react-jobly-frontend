import JobCard from "./JobCard"
import { v4 as uuid } from "uuid";


function JobCardList({ jobs }) {
  return (
    <>
      {jobs.map(job => <JobCard key={uuid()} job/>)}
    </>
  )
}

export default JobCardList;
