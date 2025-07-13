// const { useState } = require("react");

import { useState } from "react";

// function useForm(initialValue = {}) {
//   let [form, setForm] = useState(initialValue);

//   let handleChange = (e) => {
//     let { name, value } = e.target;
//     setValue({ ...value, [name]: value });
//   };

//   let resetForm = () => setForm(initialValue);
//   return { form, handleChange, resetForm };
// }
// export default useForm;


function useForm(initialValue={}){
    let[form,setForm]=useState(initialValue)

    let handleChange=(e)=>{
        let{name,value}=e.target;
        setForm({...form,[name]:value})
    }
    let reset=()=> setForm(initialValue)
    return {handleChange,reset,form}
}
export default useForm;