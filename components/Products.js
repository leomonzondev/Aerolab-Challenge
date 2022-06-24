import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/Context'
import { Filter } from './Filter'
import { PageArrow } from './PageArrow'
import { ProductCard } from './ProductCard'

export const Products = () => {

    const { state } = useContext( UserContext )

    useEffect(() => {
        setProductsList([...state.products])
    },[state.products])

    const [productsList, setProductsList] = useState([])

    const [pageNumber, setPageNumber] = useState(0)

    const productsPerPage = 16
    const pagesVisited = pageNumber * productsPerPage

    const productsShow = productsList.slice(pagesVisited, pagesVisited + productsPerPage)

    const displayProducts = productsList
        .slice(pagesVisited, pagesVisited + productsPerPage)
        .map(product =>  <ProductCard key={product._id} product={product} />)


  return (
    <div>
       
     
        <div className='flex flex-wrap justify-center pt-5 md:pt-0 md:justify-between md:gap-4 md:mx-24'>
            <Filter products={[...state.products]} filterProducts={productsList} setProductsList={setProductsList} productsShow={productsShow} productsList={productsList} />
            <PageArrow setPageNumber={setPageNumber} pageNumber={pageNumber} products={productsList} />
        </div>

        <div className='flex gap-4 flex-wrap justify-center '>
            {    
                productsList         
                ? displayProducts
                : 'Loading..' 
            }
        </div>
        <div className='flex justify-between md:mx-24 mx-14 mt-14 items-center md:pb-0 pb-10'>
            <p className='text-xl text-black-100'>{productsShow.length} of {productsList.length} products</p>
            <PageArrow setPageNumber={setPageNumber} pageNumber={pageNumber} products={productsList}/>
        </div>

    </div>
  )
}
