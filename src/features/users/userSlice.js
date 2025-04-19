import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
    addUser,
    getUsers,
    updatePassword,
    deleteUser as deleteUserAPI,
} from '../../services/api/api';

const initialState = {
    users: [],           // ← empty array that gets filled by API
    currentUser: null,
    status: 'idle',
    error: null,
};

// Load users
export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const res = await getUsers();
    return res.data;
});


// Register user
export const createUser = createAsyncThunk('users/register', async ({ username, password }) => {
    const res = await addUser({ username, password });
    return res.data;
});

// Login user
export const loginUser = createAsyncThunk(
    'users/login',
    async ({ username, password }, { getState, rejectWithValue }) => {
        const { users } = getState().users;
        const foundUser = users.find(
            (u) => u.username === username && u.password === password
        );
        if (foundUser) { return foundUser; } else {
            return rejectWithValue('Invalid username or password');
        }
    }
);

// Update user password
export const editPassword = createAsyncThunk(
    'users/editPassword',
    async ({ id, newPassword }) => {
        const res = await updatePassword(id, newPassword);
        return res.data;
    }
);

// Delete user
export const removeUser = createAsyncThunk('users/deleteUser', async (id) => {
    await deleteUserAPI(id);
    return id;
});

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        logout(state) {
            state.currentUser = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.users = action.payload; // ✅ Fills the array from API
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.users.push(action.payload);
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.currentUser = action.payload;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.error = action.payload;
            })
            .addCase(editPassword.fulfilled, (state, action) => {
                const updated = action.payload;
                const index = state.users.findIndex((u) => u.id === updated.id);
                if (index !== -1) {
                    state.users[index] = updated;
                }
            })

            .addCase(removeUser.fulfilled, (state, action) => {
                state.users = state.users.filter((u) => u.id !== action.payload);
            })
    },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
