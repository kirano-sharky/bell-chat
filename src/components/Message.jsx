import React from 'react'
import { UserAuth } from '../context/AuthContext'

const Message = ({message}) => {
  console.log(message)
  const {currentUser} = UserAuth()
  return (
    <div className='relative bottom-0 right-5 '>
      <div className={`chat ${message.uid === currentUser.uid ? 'chat-end relative left-5 ' : 'chat-start'}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full ">
            <img src={message.user_avatar}/>
          </div>
        </div>
        <div className="chat-header">
          {message.user}
        </div>
        <div className="chat-bubble dark:bg-gradient-to-r dark:bg-[#99bddf] from-[#99BDDF] to-[#CBBBD6] text-white dark:text-gray-700">{message.user_message} </div>
      </div>
    </div>
  )
}

export default Message