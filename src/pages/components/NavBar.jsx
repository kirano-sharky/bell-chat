import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';

const NavBar = () => {
  return (
    <div data-theme='lofi'>
      <div className="navbar bg-neutral text-neutral-content">
        <div className='navbar-start'>
          <a className="btn normal-case text-xl hover:text-slate-400">BELL</a>
        </div>
        <div className="navbar-end">
          <a className='btn normal-case btn-primary hover:text-slate-400'>Source code from GitHub <p className='p-1'><GitHubIcon/></p></a>
        </div>
      </div>
    </div>
  )
}

export default NavBar