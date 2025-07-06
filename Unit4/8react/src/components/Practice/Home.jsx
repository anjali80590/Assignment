import React, { useEffect, useState } from 'react'

function Home() {
    let[product,setProduct]=useState([])
     useEffect(()=>{
        fetch("https://dummyjson.com/products")
        .then((res)=>res.json())
        .then((data)=>setProduct(data.products))
        console.log(product);
    
     })
  return (
    <div>

        {product.map((p)=>(
            <div>
                {p.title}
                {p.brand}
                </div>
        ))}
    </div>
  )
}

export default Home