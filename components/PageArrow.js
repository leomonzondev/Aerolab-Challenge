import Image from 'next/image'
import React, { useContext, useState } from 'react'
import { UserContext } from '../context/Context'
import aLeft from '../assets/icons/arrow-left.svg'
import aRight from '../assets/icons/arrow-right.svg'

export const PageArrow = ({setPageNumber, pageNumber}) => {

    

   return (
    <div>
        <div className='flex py-5 md:py-0'>
            
            {
                pageNumber === 1 
                ? <div onClick={() => setPageNumber(0)}  className='contrast-50'><Image src={aLeft} /></div>
                : <div onClick={() => setPageNumber(1)} className='contrast-50'><Image src={aRight} /></div>

            }
            
        </div>
    </div>
  )
}
