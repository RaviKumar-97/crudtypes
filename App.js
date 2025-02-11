import React from "react";
import { UserProvider } from "./contexts/UserContext";
import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

function App() {
  return (
    <UserProvider>
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1>CRUD App with Context API</h1>
        <UserForm />
        <UserList />
      </div>
    </UserProvider>
  );
}

export default App; 
// import React from 'react'
// import UserForm from './components/UserForm' 
// import { UserProvider } from './contexts/UserContext'; 
// import UserList from './components/UserList';
// const App = () => {
//   return (
//     <UserProvider> 
//     <UserForm/>
//     <UserList/>
//     </UserProvider>
//   )
// }

// export default App