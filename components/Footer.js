import React from 'react'

import { RiHeartFill } from 'react-icons/ri'

export const Footer = () => {
  return (
    <div className='w-full bottom-0 flex justify-center py-1 items-center bg-black-100 '>
        <p className='flex text-black-300 text-lg items-center '>Made with&nbsp;<span className='text-blue'><RiHeartFill size={24} /></span>&nbsp;by <a href='https://github.com/Leob4rr0s' rel='noreferrer' target="_blank">&nbsp;Leo</a></p>
    </div>
  )
}
