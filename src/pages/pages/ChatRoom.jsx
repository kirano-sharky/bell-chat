import React from 'react'
import ChatBox from './components/ChatBox'
import SendMessage from './components/SendMessage'

const ChatRoom = () => {
  return (
    <div className='min-h-screen dark:bg-[#282A36]'>
      <ChatBox/>
      <SendMessage/>
    </div>
  )
}

export default ChatRoom