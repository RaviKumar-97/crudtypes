
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser } from "../slice/userSlice";

function UserList({ setEditingUserId }) {
  const users = useSelector((state) => state.usersdata.users);
  const dispatch = useDispatch();

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
                  <button onClick={() => setEditingUserId(user.id)}>Edit</button>
                  <button onClick={() => dispatch(deleteUser(user.id))}>
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
