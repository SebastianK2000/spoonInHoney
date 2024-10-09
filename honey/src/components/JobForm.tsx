import { useState } from 'react';

interface JobFormProps {
  jobId: number;
  jobTitle: string;
  onClose: () => void;
}

const JobForm: React.FC<JobFormProps> = ({ jobTitle, onClose }) => {
  const [applicantName, setApplicantName] = useState('');
  const [email, setEmail] = useState('');
  const [about, setAbout] = useState('');
  const [attachments, setAttachments] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAttachments(Array.from(e.target.files));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      applicantName,
      email,
      about,
      attachments,
    });
    onClose();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="px-4 sm:px-0">
        <h3 className="text-base font-semibold leading-7 text-gray-900">Apply for: {jobTitle}</h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Please fill out the form below to apply.</p>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Full name</dt>
            <dd className="mt-1 sm:col-span-2 sm:mt-0">
              <input
                type="text"
                className="block p-3 w-full border-2 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={applicantName}
                onChange={(e) => setApplicantName(e.target.value)}
                required
              />
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Email address</dt>
            <dd className="mt-1 sm:col-span-2 sm:mt-0">
              <input
                type="email"
                className="block p-3 w-full border-2 border-gray-300  rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">About</dt>
            <dd className="mt-1 sm:col-span-2 sm:mt-0">
              <textarea
                className="block p-3 w-full rounded-md border-2 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                required
              />
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Attachments</dt>
            <dd className="mt-1 sm:col-span-2 sm:mt-0">
              <input
                type="file"
                multiple
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
              />
              <ul className="mt-2">
                {attachments.map((file, index) => (
                  <li key={index} className="text-sm text-gray-600">
                    {file.name} - {Math.round(file.size / 1024)} KB
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
        <div className="flex justify-end mt-4">
          <button
            type="submit"
            className="text-white border-2 border-white bg-black hover:bg-white hover:text-black hover:border-2 hover:border-black px-4 py-2 rounded-md"
          >
            Submit Application
          </button>
          <button
            onClick={onClose}
            type="button"
            className="ml-4 text-white border-2 border-white bg-black hover:bg-white hover:text-black hover:border-2 hover:border-black px-4 py-2 rounded-md"
          >
            Close
          </button>
        </div>
      </div>
    </form>
  );
};

export default JobForm;
