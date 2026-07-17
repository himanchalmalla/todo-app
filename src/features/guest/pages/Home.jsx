import React from 'react'
import Marquee from 'react-fast-marquee'
import Rating from '../../../components/ui/Rating'

const Home = () => {
  const userFeedback = [
    {
      name: 'John Doe',
      feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      rating: 5
    },
    {
      name: 'Robert Downy Jr.',
      feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      rating: 5
    },
    {
      name: 'Harry Potter',
      feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      rating: 4
    },
    {
      name: 'Ricky Smith',
      feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      rating: 1.5
    },
    {
      name: 'Andrew Wilson',
      feedback: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      rating: 2.5
    },
  ]
  return (
    <div className='flex flex-col gap-4'>
      <div className='flex flex-col gap-4 '>
        <div className='flex flex-col mx-2 md:flex-row md:w-[70%] md:mt-4 md:mx-auto gap-4'>
          {/* Section One */}
          <div className="border-2 border-gray-200 rounded-xl m-2 shadow-lg bg-white">
            <p className="text-2xl text-[#fc9023] p-2 font-semibold">
              Manage Your Tasks Effectively, Manage Your Time Effectively 🫲
            </p>

            <p className="text-gray-600 p-2">
              Organize your daily tasks with ease using smart task management tools.
              Create tasks, set priorities, add deadlines, categorize your work, and
              never miss an important activity again. Stay focused on what matters most
              while reducing stress and increasing productivity every single day.
            </p>
          </div>
          {/* Section Two */}
          <div className="border-2 border-gray-200 rounded-xl m-2 shadow-lg bg-white">
            <p className="text-2xl text-[#fc9023] p-2 font-semibold">
              See Your Progress, Celebrate Your Achievements, Identify Your Strengths and Weaknesses 🥇
            </p>

            <p className="text-gray-600 p-2">
              Track every milestone with detailed progress reports and insightful
              analytics. Understand how consistently you're completing tasks, discover
              your most productive hours, recognize your accomplishments, and identify
              areas where you can improve. Every completed task brings you one step
              closer to achieving your personal and professional goals.
            </p>
          </div>
        </div>
        {/* Section Three */}
        <div className="border-2 border-gray-200 rounded-xl m-2 shadow-lg bg-white md:w-[80%] md:mt-4 md:py-4 md:mx-auto">
          <p className="text-2xl text-[#fc9023] p-2 font-semibold">
            View Your Daily Performance Report and Discover Opportunities to Improve 🌠
          </p>

          <p className="text-gray-600 p-2">
            Gain valuable insights into your daily performance through comprehensive
            reports and interactive charts. Analyze completed tasks, pending work,
            productivity trends, and time spent on different activities. Use these
            insights to build better habits, improve efficiency, and stay motivated as
            you work toward consistent personal growth.
          </p>
        </div>
      </div>
      {/* Users Feedback */}
      <div className='flex flex-col gap-4'>
        <p className='text-2xl bg-[#f58d34] content-center text-white p-2 w-fit py-1 rounded-lg ml-2'>Our Users Feedback 💁</p>
        <Marquee speed={30}>{
          userFeedback.map((user) => (
            <div key={user.name} className='flex flex-col border-2 border-gray-200 border-solid border rounded-xl m-2 w-50 h-50'>
              <div className='flex items-left bg-yellow-600 rounded-t-xl p-2 space-x-2'>
                <img src={user.image} alt={user.name} className='w-10 h-10 rounded-full' />
                <div className='flex flex-col items-left'>
                  <p>{user.name}</p>
                  <Rating count={user.rating} />
                </div>
              </div>
              <hr style={{ height: '2px', backgroundColor: '#f97d00', margin: 0 }} />
              <div className='flex flex-col bg-yellow-100 h-full rounded-b-xl p-2'>
              <p className='text-sm p-2 text-gray-600'>{user.feedback}</p>
              </div>
            </div>
          ))
        }
        </Marquee>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Home
