import React from 'react'
import Login from './pages/Login'
import NavBar from './components/NavBar'
import ChatRoom from './pages/ChatRoom'
import { Route, Routes } from 'react-router-dom'
import { PrivateRoute } from './routes/PrivateRoute'

const App = () => {
  return (
    <div className='dark:bg-[#282A36]'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/chat' element={<PrivateRoute><ChatRoom/></PrivateRoute>}/>
      </Routes>
    </div>
  )
}

export default App
