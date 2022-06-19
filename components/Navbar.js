import Image from 'next/image'
import React, { useContext } from 'react'
import { useSnackbar } from 'notistack'

import logo from '../assets/aerolab-logo.svg'
import coin from '../assets/icons/coin.svg'
import { UserContext } from '../context/Context'


export const Navbar = () => {

  const {state, dispatch} = useContext(UserContext)
  const { enqueueSnackbar } = useSnackbar();

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

  return (
    <div className='w-full bg-white h-20 flex items-center justify-between md:px-10 px-4 drop-shadow-md'>
      
      <Image src={logo} />
      
      <div className='gap-2 flex items-center'>

        <p className='text-2xl text-black-100'>{user.name}</p>

        <div className='bg-black-300  rounded-full px-5 py-2 flex  gap-1 cursor-pointer'>
          
          <p className='text-2xl text-black-100 hover:text-blue ' onClick={ handleAddPoints} >{user.points}</p>
          
          <Image src={coin} width={28} />

        </div>

      </div>

    </div>
  )
}
