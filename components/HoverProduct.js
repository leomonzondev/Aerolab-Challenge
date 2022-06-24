import Image from 'next/image'
import React, { useContext } from 'react'

import coin from '../assets/icons/coin.svg'
import buyWhite from '../assets/icons/buy-white.svg'
import { UserContext } from '../context/Context'
import { useSnackbar } from 'notistack'

export const HoverProduct = ({ product, insufficientPoints }) => {

    const {state, dispatch} = useContext(UserContext)

    const points = state.user.points
    
    const { enqueueSnackbar } = useSnackbar();



    const handleBuy = () => {
    
        dispatch({type: "BUY_PRODUCT", payload: product.cost - points})

        const exist = state.redeemed.find(item => item._id === product._id)

        if(exist) {
            const newQ = exist.quantity += 1
            
            dispatch({type: "REDEEMED", payload: {...product, quantity: newQ }})
        }else{
            dispatch({type: "REDEEMED", payload: {...product, quantity: 1 }})
        }

        enqueueSnackbar( `${product.name} redeemed`, { variant: "success"})
        


    }


  return (
    <div className={`w-full h-full z-50 absolute bg-blue/80`}>

        <div className='absolute z-10 right-0 mr-[6px] mt-[10px]  '>
            {
                insufficientPoints ? '' : <Image src={buyWhite} />
            }
            
        </div>
        <div className=' flex flex-col h-full w-full justify-center items-center gap-2 '>
            <div className='flex gap-2 items-center justify-center'>
                <p className='text-white text-3xl select-none'>{product.cost}</p>
                <Image src={coin} />
            </div>
        {
            insufficientPoints
            ? ''
            : (<button onClick={insufficientPoints ? null : handleBuy}className=' bg-white text-black-100 text-lg rounded-full px-10 py-2 mx-2'>
        {
            insufficientPoints
            ? "You haven't enough points"
            : "Redeem now"
        }
        </button>) 
        }


        </div>

    </div>
  )
}
