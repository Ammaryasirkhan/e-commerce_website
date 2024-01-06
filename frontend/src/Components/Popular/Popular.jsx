import React from 'react'
import './Popular.css'
import dataProduct from '../Assets/data'
import Items from '../Items/Items'

 const Popular = () => {
  return (
    <div className='popular'>
        <h1>Popular In Woman</h1>
        <hr />
        <div className="popular-items">
            {dataProduct.map((item)=>{return <Items key={item.id} id={item.id} name={item.name} image={item.image} newPrice={item.new_price} oldPrice={item.old_price} />})}
        </div>

    </div>
  )
}
export default Popular;