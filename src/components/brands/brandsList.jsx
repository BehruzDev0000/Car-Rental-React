import React, { useContext } from 'react'
import { Context } from '../../context/Context'
import BrandsItem from './BrandsItem'

const BrandsList = () => {
    const {AllBrands} =useContext(Context)
  return (
    <div className='flex items-center justify-between'>
    {AllBrands.map((brand)=>(<BrandsItem key={brand.id} item={brand}/>))}
    </div>
  )
}

export default BrandsList