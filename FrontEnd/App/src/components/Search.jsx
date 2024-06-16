import React, { useState } from 'react'

export default function Search() {
    const [inputText, setInputText] = useState('')

  return (
    <div className='bg-slate-600 py-6 flex items-center justify-center flex-col'>
      <input onChange={(e) => setInputText(e.target.value)} className='h-9 w-[80%] px-3 font-sans' type="text" placeholder='Search user' />
    </div>
  )
}
