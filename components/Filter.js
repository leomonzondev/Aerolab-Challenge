import React from 'react'




export const Filter = ({ products, setProductsList }) => {
   
    const handleFilter = (e) => {

        const { id } = e.target

        switch ( id ) {
            case 'highest':
                return  setProductsList( [...products.sort((a,b) => b.cost - a.cost)])

            case 'lowest':
                return setProductsList( [...products.sort((a,b) => a.cost - b.cost)] )

            case 'recent':
                return setProductsList( [...products] )

            default:
                return
        }

    }

  return (
    <div className='flex justify-center md:mb-10 md:gap-4 items-center flex-wrap '>
 

                <p className='text-xl text-black-100 md-pr-0 pr-5 md:pb-0 pb-5'>16 of 32 products</p>
                <p className='text-xl text-black-200 md:pb-0 pb-5'>Sort By:</p>
     
     
        <div className='flex'>
                
            <form className='flex gap-2 md:gap-6 '>
                <label onClick={(e) => handleFilter(e)} className='filter-button  ' htmlFor="recent">
                    <input className='' type="Radio" name='value' id='recent' />Most Recent
                </label>

                <label onClick={(e) => handleFilter(e)} className='filter-button' htmlFor="lowest">
                    <input type="Radio" name='value' className='' id='lowest'  />Lowest price
                </label>   
                    
                <label  onClick={(e) => handleFilter(e)} className='filter-button' htmlFor="highest">
                    <input type="Radio" name='value'  className='hidden' id='highest'  />Highest price
                </label>  
            </form>     
                
        </div>
        
    </div>
  )
}
