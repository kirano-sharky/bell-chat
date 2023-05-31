import React, { useEffect, useState } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LogoutIcon from '@mui/icons-material/Logout';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram'
import { UserAuth } from '../context/AuthContext';

const NavBar = () => {
  //dark mode
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []);
  //handle theme
  const handleThemeSwitch = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  };
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  });
  //new tab
  const newTab = url => {
    window.open(url)
  }
  //log out (value)
  const { currentUser, logout } = UserAuth()
  const handleUserLogout = async () => {
    try {
      await logout()
      alert('You are logging out!🔔')
    } catch (error) {
      console.log('出現故障error')
      console.log(error)
    }
  }
  return (
    <div data-theme='lofi'>
      <div className="fixed z-10 navbar bg-neutral text-neutral-content dark:bg-[#414558] ">
        <div className='navbar-start'>
          <a className="btn normal-case text-xl hover:text-slate-400 dark:bg-[#414558] border-none">
            BELL <p className='p-1'><NotificationsIcon /></p>
          </a>
        </div>
        <div className="navbar-end relative right-2">
          <a onClick={() => newTab('https://github.com/kirano-sharky/bell-chat')} className='hidden lg:flex relative right-5 btn normal-case btn-primary hover:text-slate-400 dark:bg-[#414558] border-none'>
            Source code from GitHub<p className='p-1'><GitHubIcon /></p>
          </a>
          <div className="z-40">
            <ul className="menu menu-horizontal px-1 relative right-2">
              <li tabIndex={0}>
                <a>
                  Media <svg className="fill-current " xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                </a>
                <ul className="p-2 bg-black text-white dark:bg-[#414558] border-none ">
                  <li onClick={() => newTab('https://www.facebook.com/kirano.awe/')} className='hover:bg-gray-800 rounded-lg'><a>Facebook<FacebookIcon /></a></li>
                  <li onClick={() => newTab('https://www.instagram.com/kirano0608/')} className='hover:bg-gray-800 rounded-lg'><a>Instagram<InstagramIcon /></a></li>
                </ul>
              </li>
            </ul>
          </div>
          <button onClick={handleThemeSwitch} className='relative right-3 btn p-1 hover:text-slate-400 dark:bg-[#414558] border-none'>
            {theme === 'dark' ? <WbSunnyIcon /> : <DarkModeIcon />}
          </button>
          {currentUser ? <button onClick={handleUserLogout} className='btn p-1 dark:bg-[#414558] border-none hover:text-slate-400'>Log out<p className='relative left-1'><LogoutIcon /></p></button> : ''}
        </div>
      </div>
    </div>
  )
}

export default NavBar