import React, { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";

function UserForm() {
  const { addUser, updateUser, editingUser } = useContext(UserContext);
  const [user, setUser] = useState({ name: "", email: "" });

  useEffect(() => {
    if (editingUser) {
      setUser(editingUser);
    } else {
      setUser({ name: "", email: "" });
    }
  }, [editingUser]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingUser) {
      updateUser(user);
    } else {
      addUser(user);
    }
    setUser({ name: "", email: "" });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h2>{editingUser ? "Edit User" : "Add User"}</h2>
      <input type="text"  name="name" value={user.name} onChange={handleChange} placeholder="Name"
        required style={{ padding: "10px", marginRight: "10px" }} />
      <input type="email" name="email"  value={user.email} onChange={handleChange} placeholder="Email"
        required style={{ padding: "10px", marginRight: "10px" }} />
      <button type="submit" style={{
          padding: "10px 20px",
          backgroundColor: "#007bff",
          color: "white",
          border: "none",
          cursor: "pointer",
        }}>
        {editingUser ? "Update User" : "Add User"}
      </button>
    </form>
  );
}

export default UserForm;  
// import React, { useContext, useEffect, useState } from 'react'
// import { userContext } from '../contexts/UserContext'

// const UserForm = () => {
//   const {value ,addUser,edit,setupdate}=useContext(userContext);
//   const [user,setUser]=useState({
//     name:"",email:""
//   })
//   useEffect(()=>{
// if (edit) {
//   setUser(edit)
// } else{
//   setUser({
//     name:"",email:""
//   })
// }
//   },[edit])
//   console.log("edit",edit);
//   function handleChange(e) {
//     const {name,value}=e.target
//     setUser((prival)=>({...prival,[name]:value}))
    
//   }
//   function handlesubmit(e) {
//     e.preventDefault();
//     if (edit) {
//       setupdate(user)
//     } else {
//       addUser(user)
//       setUser({
//         name:"",email:""
//       })
//     }
//     console.log("user",user);
   
//   }
//   return (
//     <div>
//     <div>{value}</div>
//      <form onSubmit={handlesubmit}>
//       <h1>user management</h1>
//       <input type='name' value={user.name} placeholder='name' onChange={handleChange} name='name'/>
//       <input type='email' value={user.email} placeholder='email' onChange={handleChange} name='email'/>
//       <button type='submit'>{edit?"update":"Save"}</button>
//      </form>
//     </div>
//   )
// }

// export default UserForm