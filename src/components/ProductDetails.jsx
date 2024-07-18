import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/productSlice';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { addToBasket } from '../redux/slices/basketSlice';


function ProductDetails() {
  const { id } = useParams();
  const addBasket = () => {
    const payload = {
      id,
      price,
      image,
      title,
      description,
      count
    }
    dispatch(addToBasket(payload))
  }
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count+1)
  }
  const decrement = () => {
    setCount(count-1)
  }
  const { products, selectedProduct } = useSelector((store) => store.product);
  const{price,image,title,description}=selectedProduct
  const dispatch = useDispatch();
  useEffect(() => {
    getProductById()
  }, []);
  const getProductById = () => {
    products && products.map((product) => {
      if (product.id == id) {
        dispatch(setSelectedProduct(product))
      }
        
    })
  }
  return (
    <div style={{marginTop:'30px',display:'flex',justifyContent:"center"}}>
      <div style={{marginRight:"40px"}}>
        <img src={image} alt="" width={300} height={500} />

      </div>
      <div>
        <h1 style={{fontFamily:'arial'}}>{title}</h1>
        <p style={{fontFamily:'arial',fontSize:'20px'}}>{description}</p>
        <h1 style={{ fontFamily: 'arial', color: "red", fontSize: '50px', fontWeight: 'bold' }}>{price}₼</h1>
        <div style={{display:'flex',alignItems:'center'}}>
          <CiCirclePlus onClick={increment} style={{ fontSize: '40px',marginRight:'5px' }} />
          <span style={{ fontSize: '35px' }}>{ count}</span>
<CiCircleMinus onClick={decrement} style={{fontSize:'40px',marginLeft:'5px'}}/>
        </div>
        <div>
          <button onClick={addBasket} style={{
            marginTop: '25px',
            border: "none",
            padding: '10px',
            backgroundColor: 'orange',
            borderRadius:'5px'
          }}>Sebete elave et</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
