import React, { useState }  from "react";

function Item({ name, category }) {
  const [ inCart , cartAdd] = useState(false)
  
  function handleCart() {
    cartAdd(!inCart)
  }
  
  let cartClass = inCart ? "in-cart" : "" ;
  
  let cartButtonText = (cartClass === "") ? "Add to Cart" : "Remove From Cart" ;

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>{cartButtonText}</button>
    </li>
  );
}

export default Item;
