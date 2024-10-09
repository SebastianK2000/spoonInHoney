import React, { useRef, useState } from "react";
import JobCard from "../components/JobCard";
import { JobData } from "../data/JobData";
import JobForm from "../components/JobForm";
import { Dialog } from '@headlessui/react';

import career1 from "../assets/career3.png";
import career2 from "../assets/career1.png";
import career3 from "../assets/career2.png";

const Careers: React.FC = () => {
  const [selectedJobId, setSelectedJobId] = useState<number | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const jobSectionRef = useRef<HTMLDivElement>(null);

  const scrollToJobs = () => {
    if (jobSectionRef.current) {
      jobSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleApplyClick = (jobId: number) => {
    setSelectedJobId(jobId);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedJobId(null);
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
                className="w-3/4 rounded-lg transform transition-transform duration-300 group-hover:scale-115"
              />
              <div
                className="absolute inset-0 bg-black bg-opacity-75 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center rounded-lg"
                onClick={scrollToJobs}
              >
                <h3 className="text-white text-1xl font-normal cursor-pointer">Zobacz więcej!</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Job Listings */}
      <div ref={jobSectionRef} className="mt-40 pb-40 h-auto bg-black text-white">
        {JobData.map((job) => (
          <JobCard
            key={job.id}
            {...job}
            onApplyClick={() => handleApplyClick(job.id)}
          />
        ))}
      </div>

      {/* Modal for Job Form */}
      <Dialog open={isOpen} onClose={closeModal} className="relative z-10">
        <div className="fixed inset-0 bg-black bg-opacity-30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center">
          <Dialog.Panel className="mx-auto w-full max-w-md rounded bg-white p-6">
            <Dialog.Title className="text-lg font-bold">Aplikacja na stanowisko</Dialog.Title>
            {selectedJobId && (
              <JobForm
                jobId={selectedJobId!}
                jobTitle={JobData.find((job) => job.id === selectedJobId)?.title || ''}
                applicantName=""
                email=""
                about=""
                attachments={[]}
                onClose={closeModal}
              />
            )}
            <button
              onClick={closeModal}
              className="mt-4 text-white bg-red-600 hover:bg-red-500 px-4 py-2 rounded"
            >
              Zamknij
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </div>
  );
};

export default Careers;
