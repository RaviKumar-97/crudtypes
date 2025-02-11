
import React, { Suspense, useState } from "react";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";
// const LazyUserList= React.lazy(()=>import("./components/UserList"))

function App() {
  const [editingUserId, setEditingUserId] = useState(null);

  return (
    <div style={{ padding: "20px" }}>
      <h1>CRUD App with Redux Toolkit</h1>
      <UserForm editingUserId={editingUserId} setEditingUserId={setEditingUserId} />
      {/* <Suspense fallback={<div>loading ....</div>}>
<LazyUserList setEditingUserId={setEditingUserId} />
      </Suspense> */}
      <UserList setEditingUserId={setEditingUserId} />
    </div>
  );
}

export default App;
