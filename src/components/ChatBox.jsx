import React from 'react'
import Message from './Message'


const ChatBox = () => {
  const messages = [
    {
      id: 1,
      user: 'python',
      user_message: 'hello world!',
      user_profile: ''
    },
    {
      id: 2,
      user: 'ame',
      user_message: 'ground pound ur mom!'
    },
    {
      id: 1,
      user: 'kirano',
      user_message: '???',
      user_profile: ''
    },
  ]
  return (
    <div className='pb-44 pt-20 container mx-auto px-[80px] dark:text-white '>
      {messages.map(message => (
        <Message key={message.id} message={message}/>
      ))}
    </div>
  )
}

export default ChatBox