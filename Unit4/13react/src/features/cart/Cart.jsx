// import React from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { addItem, removeItem } from "./cartSlice";

// function Cart() {
//   const items = useSelector((state) => state.cart.items);
//   const total = useSelector((state) => state.cart.total);
//   const dispatch = useDispatch();

//   const dummyItems = [
//     { id: 1, name: "Apple", price: 30 },
//     { id: 2, name: "Banana", price: 10 },
//     { id: 3, name: "Mango", price: 40 },
//   ];

//   return (
//     <div>
//       <h2>Shopping Cart</h2>
//       {dummyItems.map((item) => (
//         <div key={item.id}>
//           {item.name} - ₹{item.price}
//           <button onClick={() => dispatch(addItem(item))}>Add</button>
//         </div>
//       ))}

//       <h3>Cart Items:</h3>
//       <ul>
//         {items.map((item) => (
//           <li key={item.id}>
//             {item.name} - ₹{item.price}
//             <button onClick={() => dispatch(removeItem(item.id))}>
//               Remove
//             </button>
//           </li>
//         ))}
//       </ul>
//       <h4>Total: ₹{total}</h4>
//     </div>
//   );
// }

// export default Cart;



















import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem,removeItem } from './cartSlice'

  const dummyItems = [
    { id: 1, name: "Apple", price: 30 },
    { id: 2, name: "Banana", price: 10 },
    { id: 3, name: "Mango", price: 40 },
  ];
function Cart() {
   let items=useSelector(state=>state.cart.items)
   let total=useSelector(state=>state.cart.total)
   let dispatch=useDispatch();
  return (
    <div>
      <div>
        {dummyItems.map((item) => (
          <div key={item.id}>
            {item.name} {item.price}
            <button onClick={() => dispatch(addItem(item))}>Add Item</button>
          </div>
        ))}
      </div>
      <div>
        {items.map((item) => (
          <div key={item.id}>
            {item.name}{item.price}
            <button onClick={() => dispatch(removeItem(item.id))}>Remove Item</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cart