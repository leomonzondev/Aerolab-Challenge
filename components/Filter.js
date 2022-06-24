import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/Context'




export const Filter = ({ products, filterProducts, setProductsList, productsShow, productsList }) => {


    const [cat, setCat] = useState('all')

    const [blue, setBlue] = useState({
        highest:'',
        lowest:'',
        recent:''
    })

   
    const handleFilter = (e) => {

        const { id } = e.target
     
      
        
        switch ( id ) {
            case 'highest':
                setBlue({highest:'on'})
                return  setProductsList( [...filterProducts.sort((a,b) => b.cost - a.cost)])

            case 'lowest':
                setBlue({lowest:'on'})
                return setProductsList( [...filterProducts.sort((a,b) => a.cost - b.cost)] )

            case 'recent':{
                setBlue({recent:'on'})
                if( cat === 'all') {
                    return setProductsList(products)
                } else {
                   return setProductsList(products.filter(product => product.category === cat))
                }
           
            }

            default:
                return
        }
    }

   const categorys = Array.from(new Set([...products.map(pro => pro.category)]))

   const handleValue = (e) => {

        const { value } = e.target
        
        const filteredCat = products.filter(product => product.category === value)
        if(value === 'all') {
            setProductsList(products)
            setCat(value)
            setBlue({recent:'on'})
        } else {
            setProductsList(filteredCat)
            setCat(value)
            setBlue({recent:'on'})

        }
   }

   useEffect(() => {
    setBlue({recent:'on'})
   },[])


  return (
    <div className='flex justify-center md:mb-10 md:gap-4 items-center flex-wrap '>
 
        
                <p className='text-xl text-black-100 md-pr-0 pr-5 md:pb-0 pb-5'>{productsShow.length} of {productsList.length} products</p>
                <p className='text-xl text-black-100 md:pb-0 pb-5'>Sort By:</p>
     
     
        <div className='flex gap-2 md:gap-6 flex-wrap justify-center'>
                
            <div className='md:mb-0 mb-2'>
                <label htmlFor='tipo'></label>
                <select defaultValue="all" onChange={(e) => handleValue(e)} id='tipo' className="  text-black-100  text-sm rounded-lg p-2.5 focus:outline-none">
                    <option value="all" >All products</option>
                    {
                        categorys.map((category, i) => <option key={i}  value={category}>{category}</option>)
                    }

                </select>
            </div>

            <form className='flex gap-2 md:gap-6 '>
                <label onClick={(e) => handleFilter(e)} className={`filter-button ${(blue?.recent === 'on') ? "bg-blue": "bg-black-200" }` }htmlFor="recent">
                    <input  className='' type="Radio" name='value' id='recent' />Most Recent
                </label>

                <label onClick={(e) => handleFilter(e)} className={`filter-button ${(blue?.lowest === 'on') ? "bg-blue": "bg-black-200" } ` }htmlFor="lowest">Lowest price
                    <input  type="Radio" name='value' className='' id='lowest'  />
                </label>   
                    
                <label  onClick={(e) => handleFilter(e)} className={`filter-button ${(blue?.highest === 'on') ? "bg-blue": "bg-black-200" }`} htmlFor="highest">
                    <input  type="Radio" name='value'  className='group-active:bg-blue' id='highest'  />Highest price
                </label>  
            </form>


                
        </div>
        
    </div>
  )
}
