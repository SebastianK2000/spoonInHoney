import dayjs from "dayjs";

interface JobCardProps {
  title: string;
  type: string;
  contract: string;
  location: string;
  postedOn: string;
  skills: string[];
  onApplyClick: () => void;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  type,
  contract,
  location,
  postedOn,
  skills,
  onApplyClick,
}) => {
  const date1 = dayjs(Date.now());
  const diffInDays = date1.diff(postedOn, 'day');

  return (
    <div className='mx-8 mb-4 md:flex-row sm:flex-col flex-wrap'>
      <div className='w-full max-w-screen-lg my-8 mx-auto flex justify-between items-center px-6 py-4 bg-gray-800 rounded-md border border-gray-700 shadow-lg hover:translate-1 md:flex-row sm:flex-col'>
        <div className='flex flex-col items-start gap-3'>
          <h1 className='text-lg font-semibold text-white'>{title}</h1>
          <p className='text-sm sm:text-base text-gray-400'>{type} &#x2022; {contract} &#x2022; {location}</p>
          <div className='flex mx-2 items-center gap-2 text-center sm:text-left flex-wrap'>
            {skills.map(skill => (
              <p key={skill} className='text-gray-500 py-1 px-2 rounded-md border border-gray-700'>{skill}</p>
            ))}
          </div>
        </div>

        <div className='flex items-center gap-4 sm:mt-4 md:mt-0 flex-wrap'>
          <p className='text-gray-500 text-sm'>Dodane {diffInDays} dni temu</p>
            <button
            onClick={onApplyClick}
            className='text-white bg-black-500 hover:bg-gray-500 border border-white px-10 py-2 rounded-md flex-wrap'>
              Apply
            </button>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
