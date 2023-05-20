import React, { useState } from 'react'
import SendIcon from '@mui/icons-material/Send';

const SendMessage = () => {
  const [value, setValue] = useState('')
  const handleSendMessege = (e) => {
    e.preventDefault()
    setValue('')
    console.log(value)
  }
  return (
    <div data-theme='' className='bg-gray-200 dark:bg-gray-700 bottom-0 py-10 fixed w-full shadow-lg'>
      <form onSubmit={handleSendMessege} className='container mx-auto px-[50px] flex'>
        <input value={value} onChange={e => setValue(e.target.value)} type='text' className='input rounded-none rounded-bl-xl rounded-tl-xl w-full focus:outline-none dark:bg-slate-600 dark:text-white'/>
        <button type='submit' className='bg-pink-300 dark:bg-[#FF79C6] text-white font-semibold w-auto px-5 relative flex items-center rounded-none rounded-br-xl rounded-tr-xl'><a className='text-[5px]'><SendIcon/></a></button>
      </form>
    </div>
  )
}

export default SendMessage