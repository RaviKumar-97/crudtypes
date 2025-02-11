
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, updateUser } from "../slice/userSlice";

function UserForm({ editingUserId, setEditingUserId }) {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.usersdata.users);
  const [formData, setFormData] = useState({ name: "", email: "" });

  // Pre-fill the form if editing a user
  useEffect(() => {
    if (editingUserId) {
      const user = users.find((user) => user.id === editingUserId);
      if (user) setFormData({ name: user.name, email: user.email });
    } else {
      setFormData({ name: "", email: "" });
    }
  }, [editingUserId, users]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingUserId) {
      dispatch(updateUser({ id: editingUserId, ...formData }));
      setEditingUserId(null); // Exit editing mode
    } else {
      dispatch(addUser(formData));
    }
    setFormData({ name: "", email: "" }); // Clear the form
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
      <h2>{editingUserId ? "Edit User" : "Add User"}</h2>
      <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" required />
      <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
      <button type="submit"> {editingUserId ? "Update User" : "Add User"} </button>
    </form>
  );
}

export default UserForm;
