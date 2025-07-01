function Question3({
  name = "John Doe",
  age = 30,
  bio = "This is a default bio of a person who is passionate about coding, design, and tech innovation.",
}) {
  const shortBio =
    bio.length > 100 ? bio.substring(0, 100) + "… Read More" : bio;

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: 10,
        maxWidth: 300,
        marginBottom: 10,
      }}
    >
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>{shortBio}</p>
    </div>
  );
}

export default Question3;





// import React, { useState } from "react";

// function Question3({
//   name = "John Doe",
//   age = 30,
//   bio = "This is a deaaaaaaaaaaaaaaaaaasdffdffffffffffffffffffffffffffff fffffffff  fffffff dfffffffffffffffffffffff aaaaaddddion.",
// }) {
//   const [show, setShow] = useState(false);
//   const shortBio = show ? bio : bio.substring(0, 100);

//   return (
//     <div
//       style={{
//         border: "1px solid gray",
//         padding: 10,
//         width: "300px",
//         wordWrap: "break-word",
//         overflowWrap: "break-word",
//       }}
//     >
//       <h3>{name}</h3>
//       <p>Age: {age}</p>
//       <p>
//         {shortBio}
//         {bio.length > 100 && (
//           <span
//             style={{ cursor: "pointer", color: "blue" }}
//             onClick={() => setShow(!show)}
//           >
//             {show ? " Show Less" : " ...Read More"}
//           </span>
//         )}
//       </p>
//     </div>
//   );
// }

// export default Question3;
