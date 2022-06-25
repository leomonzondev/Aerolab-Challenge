import React, { useContext, useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { UserContext } from '../context/Context'
import { useSnackbar } from 'notistack'
import { HoverProduct } from './HoverProduct'
import { motion, AnimatePresence } from "framer-motion";


import coin from '../assets/icons/coin.svg'
import buyBlue from '../assets/icons/buy-blue.svg'

export const ProductCard = ({product}) => {

    const {state, dispatch} = useContext(UserContext)
    const { enqueueSnackbar } = useSnackbar();



    const [isHover, setIsHover] = useState(false)

    const points = state.user.points
    const insufficientPoints = product.cost > points

    const handleHover = () => {
      setIsHover(!isHover)
     
    }

 

    const cantBuy = <div className='flex text-sm gap-1 items-center bg-black-100/80 rounded-full px-4 py-1 text-white'>
      <p>You need {product.cost - points}</p>
      <Image src={coin} width={28} />
    </div>


  return (
    <>
    <motion.div
        layout
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0.2 }}
        transition={{
          duration: 0.2,
          type: "tween",
          stiffness: 200,
          damping: 30,
        }}
    className={` bg-white rounded-sm  drop-shadow-sm relative transition-opacity`} onMouseEnter={handleHover} onMouseLeave={handleHover} >
      
      <div className='absolute z-10 right-0 m-3'>
        {
          insufficientPoints
          ? cantBuy
          : <Image src={buyBlue} />
        }
        
      </div>

        {  isHover ? (<div className='bg-blue'><HoverProduct product={product} insufficientPoints={insufficientPoints}  /></div>) : '' }
      <div className='p-4'>

        <Image src={product.img.url} width={252} height={182} />
        <div className=''>
          <p className='text-black-200'>{product.category}</p>
          <h1 className='text-black-100 text-lg'>{product.name}</h1>
        </div>
      </div>
    
     

    </motion.div>
    </>
  )
}
