 import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [], // The array to store users
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    // Add a new user
    addUser: (state, action) => {
      console.log("state",state);
      console.log("action",action);
      // state.users.push({ id: Date.now(), ...action.payload });
      state.users=[...state.users,{ id: Date.now(), ...action.payload}]
    },
    // Update an existing user
    updateUser: (state, action) => {
      const { id, name, email } = action.payload;
      const user = state.users.find((user) => user.id === id);
      if (user) {
        user.name = name;
        user.email = email;
      }
    },
    // Delete a user
    deleteUser: (state, action) => {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },
  },
});

// Export actions
export const { addUser, updateUser, deleteUser } = userSlice.actions;

// Export the reducer
export default userSlice.reducer;
