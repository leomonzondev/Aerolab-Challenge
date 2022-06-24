import Image from 'next/image'
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/Context'
import aLeft from '../assets/icons/arrow-left.svg'
import aRight from '../assets/icons/arrow-right.svg'

export const PageArrow = ({setPageNumber, pageNumber, products}) => {


   

    const handleArrow = () => {

        if(pageNumber === 1 ) {
            setPageNumber(0)
           
        } else  {
            setPageNumber(1)
           
        }
    }

    useEffect(()=> {
        if(products?.length <= 16) {
            setPageNumber(0)
        
        }
    },[products])


    

   return (
    <div>
        <div className='flex py-5 md:py-0'>
            {
                (products?.length <= 16)
                ? ""
                : <div onClick={handleArrow} className={`contrast-50 cursor-pointer `}><Image src={ (pageNumber === 1) ? aLeft : aRight} /></div>
            }
            
            
        </div>
    </div>
  )
}
