import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/users/userSlice'; // Adjust path if different

export const store = configureStore({
    reducer: {
        users: userReducer, // this becomes state.users
    },
});
