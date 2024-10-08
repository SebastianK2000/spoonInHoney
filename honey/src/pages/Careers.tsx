import React, { useRef } from "react";

import JobCard from "../components/JobCard";
import { JobData } from "../data/JobData";

import career1 from "../assets/career2.jpg";
import career2 from "../assets/career1.jpg";
import career3 from "../assets/career3.jpg";

const Careers: React.FC = () => {

  const jobSectionRef = useRef<HTMLDivElement>(null);

  const scrollToJobs = () => {
    if (jobSectionRef.current) {
      jobSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-black">
      {/* Careers Hero Section */}
      <h1 className="text-white pt-8 text-4xl text-center font-bold mb-4 tracking-tight">
        Dołącz do naszego teamu!
      </h1>
      <div className="bg-black my-8 text-balance text-center">
        <div className="flex justify-center space-x-4">
          {[career1, career2, career3].map((image, index) => (
            <div className="flex justify-center items-center relative group" key={index}>
              <img
                src={image}
                alt={`Łyżka w miodzie team ${index + 1}`}
                className="w-2/4 rounded-lg transform transition-transform duration-300 group-hover:scale-115"
              />
              <div className="absolute inset-0 bg-black bg-opacity-75 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center rounded-lg"
                onClick={scrollToJobs}
              >
                <h3 className="text-white text-1xl font-normal cursor-pointer">Zobacz więcej!</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Job Listings */}
      <div ref={jobSectionRef} className="mt-40 pb-40	 h-auto bg-black text-white">
        {JobData.map(job => (
          <JobCard key={job.id} {...job} applyLink={`/apply/${job.id}`} />
        ))}
      </div>
    </div>
  );
};

export default Careers;
