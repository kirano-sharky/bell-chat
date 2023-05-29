import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';

const Login = () => {
  return (
  <div className="hero min-h-screen">
    <div className="hero-content flex text-center flex-col lg:flex-row">
      <img src='/bell.png' className='bounce lg:w-[500px] w-[200px] dark:border dark:border-gray-700 shadow-gray-600 dark:shadow-gray-400 shadow-sm rounded-[25px] bg-slate-100 dark:bg-[#363847]'/>
      <div className='dark:text-[#f8f8f2]'>
        <h1 className="text-5xl font-bold lg:flex text-center">LET'S BELL!</h1>
        <p className="py-6 text-[18px]">Ding Dong!🔔 Join us! And start to chat them!✨</p>
        <button className="lg:flex btn normal-case btn-primary bg-secondary hover:bg-pink-200 dark:hover:bg-pink-300 dark:hover:text-gray-600 border-none rounded-lg dark:bg-pink-400 dark:text-white">
          Get started with GitHub <p className='p-1 font-semibold'><GitHubIcon/></p>
        </button>
        <div className='relative top-2 text-center'>
          <span className='lg:flex relative top-1 text-gray-600 dark:text-gray-400 font-medium'>/HAPPY HACKING 🎉</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login