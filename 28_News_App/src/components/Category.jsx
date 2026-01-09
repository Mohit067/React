import React from 'react'
import Wrapper from './Wrapper'

const Category = () => {
    
    const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  return (
    <div className='sticky top-16 z-10 bg-base-100'>
        <Wrapper>
            <div className='max-w-full w-fit m-auto overflow-x-auto overflow-hidden flex scrollbar-none px-5 gap-2'>
                {categories.map((category, index) => {
                    return <button key={index} className="btn btn-active btn-primary">{category}</button>
                })}
            </div>
        </Wrapper>
    </div>
  )
}

export default Category