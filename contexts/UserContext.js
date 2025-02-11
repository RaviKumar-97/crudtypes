
import React, { createContext, useState } from "react";
 
// Create Context
export const UserContext = createContext();

// Create a Provider Component
export function UserProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [editingUser, setEditingUser] = useState(null);

  // Add User
  const addUser = (user) => {
    setUsers([...users, { id: Date.now(), ...user }]);
  };

  // Update User
  const updateUser = (updatedUser) => {
    setUsers(users.map((user) => (user.id === updatedUser.id ? updatedUser : user)));
    setEditingUser(null);
  };

  // Delete User
  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <UserContext.Provider value={{ users, addUser, updateUser, deleteUser, editingUser, setEditingUser, }} >
      {children}
    </UserContext.Provider>
  );
} 

// import { createContext, useState } from "react";
// export const  userContext=createContext();
// export function UserProvider({children}) {
//   const [value,setUser]=useState([]);
//   const [formdata,setFormdata]=useState([]);
//   const [edit,setEdit]=useState(null)
//   function addUser(user) {
//     console.log("adduser",user);
//     setFormdata([...formdata,{id:Date.now(),...user}]);
        
//   }
//  function setupdate(user) {
//   setFormdata(formdata.map((userdata)=>userdata.id===user.id?user:userdata));
//   setEdit(null)
//  }
//  function setDelete(id) {
//   setFormdata(formdata.filter((user)=>user.id!==id))
//  }
//   console.log("formdata",formdata);
//   return (
//     <userContext.Provider value={{
//       value,
//       addUser,
//       formdata,
//       edit,
//       setEdit,
//       setupdate,
//       setDelete
//       }}>
//       {children}
//     </userContext.Provider>
//   )
// }
