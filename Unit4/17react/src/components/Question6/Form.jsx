// import React from "react";
// import useForm from "./useForm";

// function Form() {
//   const { formData, handleChange, resetForm } = useForm({
//     name: "",
//     email: "",
//     age: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Submitted Data:", formData);
//     resetForm();
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input
//         name="name"
//         placeholder="Name"
//         value={formData.name}
//         onChange={handleChange}
//       />
//       <input
//         name="email"
//         placeholder="Email"
//         value={formData.email}
//         onChange={handleChange}
//       />
//       <input
//         name="age"
//         placeholder="Age"
//         value={formData.age}
//         onChange={handleChange}
//       />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default Form;



import React from 'react'
import useForm from './useForm'

function Form() {
    let{form,handleChange,reset}=useForm({
        name:"",
        email:""
    })
    function handleSubmit(e){
        e.preventDefault();
        console.log(form);
        reset();
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="name"
          value={form.name}
          onChange={handleChange}
          name="name"
        />
        <input
          type="name"
          value={form.email}
          onChange={handleChange}
          name="email"
        />
        <button onClick={reset}>Reset</button>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Form