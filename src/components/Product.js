import React from 'react'
import "../Product.css"
import { useStateValue } from './StateProvider';

/**
* @author
* @function Product
**/

const Product = ({ id, title, image, ratings, price }) => {


  const [{basket},dispatch]=useStateValue();
const addToBucket=()=>{
  dispatch({
    type:'COUNT',
    count:basket?.reduce((amount,item)=>item.price+amount,0)+price
  })
dispatch({
  type:'ADD_TO_BASKET',
  item:{
    id:id,
    title:title,
    image:image,
    ratings:ratings,
    price:price,
  },
})


}

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>Rs:</small>
          <strong>{price}</strong>
        </p>
        <div className="product__ratings">
          {Array(ratings)
            .fill()
            .map((_) => (
              <p>❤️</p>
            ))}
        </div>
      </div>
      <img src={image} />
      <button  onClick={addToBucket} >Add</button>
    </div>
  );
};

export default Product;