import React from 'react'

const Item = ({product}) => {
  return (
    <div >
    <img src={product.image} alt="" />
    <h2>{product.name}</h2>
    <p>precio: ${product.price}</p>
  </div>
  )
}

export default Item