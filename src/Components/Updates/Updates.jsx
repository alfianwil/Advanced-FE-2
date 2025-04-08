import React, { useState } from 'react';
import { updatePassword, getUserByUsername } from '../../services/api/api.js'; // Import the functions from api.js
import { deleteUser } from '../../services/api/api.js';


const UpdatePasswordForm = () => {
  const [username, setUsername] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const [id, setUserId] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();

    if (!id) {
      setError('Please enter a username');
      return;
    }

    try {
      // Call the delete function from api.js
      await deleteUser(id);
      setSuccessMessage('User deleted successfully!');
      setError('');
    } catch (err) {
      setError('Failed to delete user');
      setSuccessMessage('');
    }
  };
 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !currentPassword || !newPassword) {
      setError('Please fill out all fields.');
      return;
    }

    // Fetch user by username
    const user = await getUserByUsername(username);

    if (user) {
      // Check if the current password matches the one in the MockAPI
      if (user.password === currentPassword) {
        try {
          // Update the password
          const updatedUser = await updatePassword(user.id, newPassword);
          setSuccessMessage('Password updated successfully!');
          setError('');
        } catch (err) {
          setError('Failed to update password');
        }
      } else {
        setError('Current password is incorrect.');
        setSuccessMessage('');
      }
    } else {
      setError('Username not found.');
      setSuccessMessage('');
    }
  };

  

  return (
    <div style={{ textAlign: 'center', backgroundColor: '#f0f0f0' }}>
      <h2>Update Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Current Password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <button type="submit" style={{ marginTop: '10px', backgroundColor: '#4CAF50', color: 'white' }}>Update Password</button>
      </form>

      
      

      <div>
        <br />
      <h2>Delete User</h2>
      <form onSubmit={handleDelete}>
        <div>
          <input
            type="text"
            placeholder="User ID"
            value={id}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
        <button type="submit" style={{ marginTop: '10px', backgroundColor: '#4CAF50', color: 'white' }}>Delete User</button>
      </form>
    <br />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
    </div>
    <br />
    <a href="../Login">Login</a>
    </div>

    
  );
};

export default UpdatePasswordForm;
