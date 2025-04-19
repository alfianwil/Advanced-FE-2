// api.js
import axios from 'axios';
//const API_BASE_URL = 'https://67f1aea5c733555e24add3ea.mockapi.io/api/v1/';  // Replace with your actual project ID
const API_BASE_URL = process.env.REACT_APP_API_URL;
const axiosInstance = axios.create({
    baseURL: API_BASE_URL // 🔁 Replace with your real base URL
});

export const getUsers = () => axiosInstance.get('/users');
export const addUser = (data) => axiosInstance.post('/users', data);
export const updatePassword = (id, newPassword) =>
    axiosInstance.put(`/users/${id}`, { password: newPassword });
export const deleteUser = (id) => axiosInstance.delete(`/users/${id}`);

/*
// Function to get users based on username and password
export const loginUser = async (username, password) => {
  try {
      const response = await fetch(`${API_BASE_URL}users?username=${username}&password=${password}`);
      if (response.ok) {
          const users = await response.json(); // Parse the response to JSON

          // Search for a user where both username and password match
          const user = users.find(user => user.username === username && user.password === password);

          if (user) {
              // Return the user data if a match is found
              return user;
          } else {
              // If no match is found, throw an error
              throw new Error('Invalid username or password');
          }
      } else {
          // If the response is not ok, throw an error
          throw new Error('Failed to fetch users');
      }
  } catch (error) {
      console.error('Error logging in:', error);
      return null;
  }
};
export const addUser = async (userData) => {
  try {
      const response = await fetch(`${API_BASE_URL}users`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(userData),
      });
      if (response.ok) {
          const data = await response.json();
          return data;
      } else {
          throw new Error('Failed to add user');
      }
  } catch (error) {
      console.error('Error adding user:', error);
  }
};

export const getUsers = async () => {
  try {
      const response = await fetch(`${API_BASE_URL}users`);
      if (response.ok) {
          const data = await response.json();
          return data;
      } else {
          throw new Error('Failed to fetch users');
      }
  } catch (error) {
      console.error('Error fetching users:', error);
  }
};

export const updateUser = async (userId, updatedData) => {
  try {
      const response = await fetch(`${API_BASE_URL}users/${userId}`, {
          method: 'PUT',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(updatedData),
      });
      if (response.ok) {
          const data = await response.json();
          return data;
      } else {
          throw new Error('Failed to update user');
      }
  } catch (error) {
      console.error('Error updating user:', error);
  }
};

// Function to delete a user by ID
export const deleteUser = async (id) => {
  try {
      // Sending DELETE request to remove the user by userId
      const response = await fetch(`${API_BASE_URL}users/${id}`, {
          method: 'DELETE', // HTTP method to delete the resource
      });

      if (!response.ok) {
          throw new Error('Failed to delete user');
      }

      // If successful, you might want to return a success message or status
      const data = await response.json();
      return data; // The deleted user object (or status) might be returned by the API
  } catch (error) {
      console.error('Error deleting user:', error);
      throw error; // Rethrow the error for the caller to handle
  }
};

// Function to update the user's password
export const updatePassword = async (userId, newPassword) => {
  try {
      const updatedUser = {
          password: newPassword, // Only the password is updated
      };

      // Sending PUT request to update the user's password
      const response = await fetch(`${API_BASE_URL}users/${userId}`, {
          method: 'PUT', // HTTP method to update the resource
          headers: {
              'Content-Type': 'application/json', // Sending JSON data
          },
          body: JSON.stringify(updatedUser), // Body of the request containing the updated password
      });

      if (!response.ok) {
          throw new Error('Failed to update password');
      }

      const updatedData = await response.json(); // Parse the response if the update is successful
      return updatedData; // Return the updated user data
  } catch (error) {
      console.error('Error updating password:', error);
      throw error; // Rethrow the error so it can be handled by the caller
  }
};

// Example function to get user by username (useful for login or validation)
export const getUserByUsername = async (username) => {
  try {
      const response = await fetch(`${API_BASE_URL}users?username=${username}`);
      if (!response.ok) {
          throw new Error('Failed to fetch users');
      }

      const users = await response.json();
      return users.length > 0 ? users[0] : null; // Return the user if found, or null if not
  } catch (error) {
      console.error('Error fetching user:', error);
      return null;
  }
};
*/

