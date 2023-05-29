import React from 'react'

const Message = ({message}) => {
  return (
    <div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full ">
            <img src="" />
          </div>
        </div>
        <div className="chat-header">
          {message.user}
        </div>
        <div className="chat-bubble bg-black dark:bg-blue-500">{message.user_message}</div>
      </div>
    </div>
  )
}

export default Message