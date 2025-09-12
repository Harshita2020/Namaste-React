import React from 'react'
import ItemList from './ItemList'

const RestaurantCategory = ({data}) => {
  // console.log("DATA: ", data)
  return (
    <>
    <div className=' font-bold w-full bg-gray-100 my-4 shadow-lg p-4 rounded-2xl flex justify-between'>
      <span>{data?.title} - ({data?.itemCards.length})</span> 
      <span>🔽</span>
    </div>
    {/* // Accordian Body */}

    <ItemList data={data?.itemCards}/>

    </>
  )
}

export default RestaurantCategory