import Image from 'next/image'
import React, { useContext } from 'react'
import { UserContext } from '../context/Context'

import coin from '../assets/icons/coin.svg'
import { isTypeNode } from 'typescript'

export const History = () => {

    const { state } = useContext(UserContext)


  return (
    <div className='mt-[23rem] h-72 w-[24rem] max-h-screen overflow-y-auto bg-white absolute right-0 '>
        <div className='flex justify-center'>
            <p className='text-black-200 text-sm'>History</p>
        </div>
            <div className='flex flex-col'>
                {
                    state.redeemed.map(item => <Card key={ Math.random()} item={item} />)
                }
            </div>
    </div>
  )
}

const Card = ({item}) => {
  return (
    <div className='flex items-end justify-between mb-2 pr-8 '>
        <Image src={item.img.url} width={82} height={62} />
        <div>
            <p className='text-black-200 text-sm'>{item.category}</p>
            <p className='text-black-100 leading-4'>{item.name}</p>
        </div>
        <div>
          <p>x {item.quantity}</p>
        </div>

        <div className='flex items-center  gap-1'>
            <p className='text-lg text-black-100'>{item.cost}</p>
            <Image src={coin} width={24} height={24} />
        </div>


    </div>
  )
}

