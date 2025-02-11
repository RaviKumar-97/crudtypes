import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function UserList() {
  const { users, setEditingUser, deleteUser } = useContext(UserContext);

  return (
    <div>
      <h2>User List</h2>
      {users.length === 0 ? (
        <p>No users available. Add some!</p>
      ) : (
        <table border="1" style={{ width: "100%", textAlign: "left" }}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <button
                    onClick={() => setEditingUser(user)}
                    style={{
                      marginRight: "10px",
                      padding: "5px 10px",
                      backgroundColor: "orange",
                      color: "white",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    Edit
                  </button>
                  <button onClick={() => deleteUser(user.id)}
                    style={{
                      padding: "5px 10px",
                      backgroundColor: "red",
                      color: "white",
                      border: "none",
                      cursor: "pointer",
                    }}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default UserList; 
// import React, { useContext } from 'react'
// import { userContext } from '../contexts/UserContext'

// const UserList = () => {
//   const {formdata,setEdit,setDelete}=useContext(userContext);
//   return (
//     <>
//     <h1>user list</h1>
//     {formdata.length===0?(<p>no data found</p>):(
//     <table border={"1px"} style={{width:"100%"}}> 
//       <thead>
//         <tr>
//           <th>name</th>
//           <th>email</th>
//           <th>action</th>
//         </tr>
//       </thead>
//       <tbody>
//        {formdata.map((user)=>(
//          <tr key={user.id}>
//          <td>{user.name}</td>
//          <td>{user.email}</td>
//          <td><button onClick={()=>setEdit(user)}>edit</button>
//          <button onClick={()=>setDelete(user.id)}>delete</button></td>
          
//        </tr>
//        ))}
//       </tbody>
//     </table>)}
    
//     </>
//   )
// }

// export default UserList