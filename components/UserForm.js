 
import React, { useState, useEffect } from "react";

function UserForm({ addUser, updateUser, editingUser }) {
  const [user, setUser] = useState({ name: "", email: "" });

  // Pre-fill the form if editing a user
  useEffect(() => {
   
    if (editingUser) {
        console.log("effect edit true");
      setUser(editingUser);
    } else {
        console.log("effect edit false");
      setUser({ name: "", email: "" });
    }
  }, [editingUser]);
console.log("editingUser",editingUser);
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
      <div>
        <input type="text" name="name" value={user.name} onChange={handleChange}
         placeholder="Name" required style={{ padding: "10px", marginRight: "10px" }}/>
        <input type="email" name="email" value={user.email} onChange={handleChange}
          placeholder="Email" required style={{ padding: "10px", marginRight: "10px" }} />
        <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "white", 
        border: "none", cursor: "pointer"}} >
          {editingUser ? "Update" : "Add"}
        </button>
      </div>
    </form>
  );
}

export default UserForm;
