import React from 'react'

const ItemList = ({data}) => {
    console.log("Item data, ", data)
  return (
    <div>

        {data.map((item, i) => {
            return (
                <div key = {i}>
                    {item?.card?.info?.name}
                </div>
            )
        })}
    </div>
  )
}

export default ItemList