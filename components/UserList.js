 import React from "react";

function UserList({ users, setEditingUser, deleteUser }) {
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
                  <button onClick={() => setEditingUser(user)}
                    style={{
                      marginRight: "10px",
                      padding: "5px 10px",
                      backgroundColor: "orange",
                      color: "white",
                      border: "none",
                      cursor: "pointer",
                    }} >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteUser(user.id)}
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
