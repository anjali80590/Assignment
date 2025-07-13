// import React from "react";
// import useToggleItems from "./useToggleItems";

// function ToggleComponent() {
//   const [item, toggleItem] = useToggleItems(["A", "B", "C"], 1); 

//   return (
//     <div style={{ textAlign: "center", marginTop: "40px" }}>
//       <h2>Current Item: {item}</h2>
//       <button onClick={toggleItem}>Toggle</button>
//     </div>
//   );
// }

// export default ToggleComponent;











import React from "react";
import useToggleItems from "./useToggleItems"; 

function ToggleComponent() {
  const [item, toggleItem] = useToggleItems(["a", "b", "c", "d"], 1); 

  return (
    <div>
      <h4>{item}</h4>
      <button onClick={toggleItem}>Toggle</button>
    </div>
  );
}

export default ToggleComponent;
