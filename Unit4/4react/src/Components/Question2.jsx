import React, { useState } from 'react'

function Question2() {
  let[products,setProducts]=useState([])
  let[error,setError]=useState('')
  let[loading,setLoading]=useState(false);

  async function fetchProducts(){
    setLoading(true);
    try{
      let response=await fetch('https://fakestoreapi.com/products');
      let data=await response.json();
      setProducts(data);
    }
    catch(err){
      setError('error in fetching');
    }
    finally{
      setLoading(false);
    }
  }
  function clearProducts(){
    setProducts([])
  }
  return (
    <div>
      <h1>Product Card</h1>
      {error &&<p>{error}</p>}
      {loading && <p>Loading ...</p>}
      <button onClick={fetchProducts}> Fetch Products</button>
      <button onClick={clearProducts}>Clear Products</button>
      <div>
        {
          products.map((product)=>(
            <div>
              <div>{product.title}</div>
              <div>{product.price}</div>
              <img style={{width:'200px'}} src={product.image}/>
              </div>
          ))
        }
      </div>
    </div>
  )
}

export default Question2