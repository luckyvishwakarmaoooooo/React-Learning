import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
        <h1>Stock Product</h1>
        <h3>{props.productName_1}</h3>
        <img src={props.productImg_1} alt={props.productName_1} />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nisi officiis inventore voluptates repudiandae tenetur, ab dolorum impedit animi iure.</p>
        <button>Buy Now 20$</button>
    </div>
  )
}

export default Card