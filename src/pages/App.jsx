import React from 'react'
import Login from './pages/Login'
import NavBar from './pages/components/NavBar'
import ChatRoom from './pages/ChatRoom'

const App = () => {
  return (
    <div className='dark:bg-[#282A36]'>
      <NavBar/>
      { /*<Login/>*/ }
      { <ChatRoom/> }
    </div>
  )
}

export default App
