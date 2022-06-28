import Image from 'next/image'
import React, { useContext, useState } from 'react'
import { useSnackbar } from 'notistack'

import logo from '../assets/aerolab-logo.svg'
import coin from '../assets/icons/coin.svg'
import { UserContext } from '../context/Context'
import img from '../assets/profile.jpg'
import { History } from './History'

export const Navbar = () => {

  const {state, dispatch} = useContext(UserContext)
  const { enqueueSnackbar } = useSnackbar();
  const [showHistory, setShowHistory] = useState(false)

  const { user } = state


  const current = state.user.points

  const handleAddPoints = () => {

      const points = 500
      const amount = current + points

      if ( current < 10000 ) {
        dispatch({type:"ADD_POINTS", payload: amount})
        enqueueSnackbar(`${points} points added`, { variant: "success" })
      }
  }

  const handleHistory = () => {

    setShowHistory(!showHistory)

  }

  return (<div className='relative'>

    <div className='w-full bg-white z-10 h-20 flex items-center justify-between md:px-10 px-4 drop-shadow-md fixed'>
 
      <Image src={logo} />
      
      <div className='gap-2 md:gap-2 flex items-center cursor-pointer' >
        <div  className='rounded-full p-6 bg-[url("../assets/profile.jpg")] bg-cover'>

        </div>
        <p  className='text-xl md:text-2xl text-black-100 '>{user.name}</p>

        <div className='bg-black-300 items-center rounded-full px-5 py-2 flex  gap-1 cursor-pointer text-black-100 hover:text-blue' onClick={ handleAddPoints} >
          
          <p className='text-xl md:text-2xl' >{user.points}</p>

          <Image src={coin} width={28} />

        </div>
    <button className='text-xl pl-3' onClick={handleHistory}>History</button>
        {
          showHistory
          ? <History />
          : ""
        }
    </div>
      </div>


  </div>
  )
}
