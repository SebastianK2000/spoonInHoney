import dayjs from "dayjs";

function JobCard(props: any) {
    const date1 = dayjs(Date.now());
    const diffInDays = date1.diff(props.postedOn, 'day');

    return (
      <div className='mx-8 mb-4 md:flex-row sm:flex-col flex-wrap'>
        <div className='w-full max-w-screen-lg my-8 mx-auto flex justify-between items-center px-6 py-4 bg-pure-pink rounded-md border border-black shadow-lg hover:translate-1 md:flex-row sm:flex-col'>
          <div className='flex flex-col items-start gap-3'>
              <h1 className='text-lg font-semibold'>{props.title}</h1>
              <p className='text-sm sm:text-base'>{props.type} &#x2022; {props.contract} &#x2022; {props.location}</p>
                <div className='flex mx-2 items-center gap-2 text-center sm:text-left flex-wrap'>
                  {props.skills.map((skill: any) => (
                    <p key={skill} className='text-gray-500 py-1 px-2 rounded-md border border-black'>{skill}</p>
                  ))}
                </div>
            </div>

                <div className='flex items-center gap-4 sm:mt-4 md:mt-0 flex-wrap'>
                    <p className='text-gray-500 text-sm'>Dodane {diffInDays} dni temu</p>
                    <a href="">
                        <button className='text-creme hover:text-white border border-creme px-10 py-2 hover:bg-creme rounded-md flex-wrap'>Apply</button>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default JobCard;
