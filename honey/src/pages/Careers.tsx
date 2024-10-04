import JobCard from "../components/JobCard"
import { JobData } from "../data/JobData"

function Careers() {
  return (
    <div>
      <h1 className="mt-2 text-3xl text-center font-normal tracking-tight text-gray-900">Nasze aktualne oferty pracy:</h1>
      {JobData.map((job) => (
        <JobCard key={job.id} {...job} />
      ))}
    </div>
  )
}

export default Careers
