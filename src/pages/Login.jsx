import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';

const Login = () => {
  return (
  <div className="hero min-h-screen bg-base-200">
    <div className="hero-content flex flex-col lg:flex-row">
      <img src='/bell.png' className='bounce lg:w-[500px] w-[200px]'/>
      <div>
        <h1 className="text-5xl font-bold lg:flex text-center ">LET'S BELL!</h1>
        <p className="py-6 text-[18px]">Ding Dong!🔔 Join us! And start to chat them!✨</p>
        <button className="relative lg:left-0 left-[90px] btn normal-case btn-primary bg-secondary hover:bg-pink-200 border-none rounded-lg">
          Get started with GitHub <p className='p-1 font-semibold'><GitHubIcon/></p>
        </button>
        <div className='relative top-2 text-center'>
          <span className='lg:flex relative top-1 text-gray-700 font-medium'>/HAPPY HACKING 🎉</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login