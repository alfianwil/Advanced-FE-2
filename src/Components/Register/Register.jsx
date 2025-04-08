import "./Register.css";
import React, { useState } from 'react';
import bgimage from "../Assets/bg1.jpeg";
import chill from "../Assets/chill.png";
import google from "../Assets/google.png";
import {  addUser  } from '../../services/api/api.js';
//import { useNavigate } from 'react-router-dom';



// function Register(){

//   const [users, setUsers] = useState([]);
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordConfirm, setPasswordConfirm] = useState('');
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
//     setUsers(storedUsers);
//   }, []);
  
//   useEffect(() => {
//     localStorage.setItem('users', JSON.stringify(users));
//   }, [users]);

  
//   // Load users from localStorage when the component mounts
//   const handleRegister = (e) => {
//     e.preventDefault();

//     // Validate password and confirmation match
//     if (password !== passwordConfirm) {
//       setError('Passwords do not match.');
//       return;
//     }

//     // Check if the username already exists in localStorage
//     const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
//     const userExists = storedUsers.some((user) => user.username === username);

//     if (userExists) {
//       setError('Username already exists.');
//       return;
//     }

//     // Create a new user and save it to localStorage
//     const newUser = { username, password };
//     storedUsers.push(newUser);
//     localStorage.setItem('users', JSON.stringify(storedUsers));
//     alert('User registered successfully!');
//     navigate('/login');
//   };

const Register = () => {
  //const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
 // const [error, setError] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  // Fetch users when the component mounts
  /* useEffect(() => {
    const fetchUsers = async () => {
      const fetchedUsers = await getUsers();
      setUsers(fetchedUsers);
    };

    fetchUsers();
  }, []); */

  // Add a new user
  const handleAddUser = async (e) => {
    e.preventDefault();

    // Validate passwords match
    if (password !== passwordConfirm) {
      setError('Passwords do not match.');
      return;
    }

    // Ensure both fields are provided
    if (!username || !password) {
      setError('Please enter both a username and a password.');
      return;
    }

    // Prepare the new user object
    const newUser = {
      username,
      password,
    };

    try {
      // Call the addUser function to send data to MockAPI
      const addedUser = await addUser(newUser);

      if (addedUser) {
        setSuccessMessage('User registered successfully!');
        console.log('User added:', addedUser);
        // Optionally, reset the form
        setUsername('');
        setPassword('');
        setPasswordConfirm('');
      } else {
        setError('Failed to register user');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to register user');
    }
  };

  // Update an existing user
  /* const handleUpdateUser = async (userId) => {
    if (!username || !password) {
      alert("Please enter both a username and a password to update.");
      return;
    }

    const updatedData = { username, password };
    const updatedUser = await updateUser(userId, updatedData);
    setUsers(users.map(user => (user.id === userId ? updatedUser : user)));
  
  };

  // Delete a user
  const handleDeleteUser = async (userId) => {
    await deleteUser(userId);
    setUsers(users.filter(user => user.id !== userId));
  }; */

  return (
    <div
  className="flex relative justify-center items-center min-h-screen p-2 bg-cover bg-center"
  style={{
    backgroundImage: `url('${bgimage}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    margin: '0',
    padding: '0',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }}
>
  <div
    className="absolute flex flex-col items-left justify-center "
    style={{
      boxSizing: 'border-box',
      height: '630px',
      borderRadius: '5px',
      backgroundColor: '#282a2c',
      
      width: '400px', // Max width for the form
      opacity: 0.9,
      zIndex: 10, // Ensures that the form is on top of any other content
      padding: '2rem',
      textAlign: 'center', // Ensure text is centered
    }}
  >
    <img className="mx-auto mb-4" src={chill} alt="chill" />
    
    {/* Adjusted h1 and h3 with inline styles to ensure visibility */}
    <h1
      style={{
        color: 'white', // Ensure text is white
        fontSize: '2rem', // Adjust font size
        fontWeight: '600', // Bold weight
        marginBottom: '10px', // Add some spacing
      }}
    >
      Daftar
    </h1>
    
    <h3
      style={{
        color: 'white', // Ensure text is white
        fontSize: '1.25rem', // Adjust font size
        fontWeight: '500', // Medium weight
        marginBottom: '20px', // Add some spacing
      }}
    >
      Selamat datang!
    </h3>
{error && <p style={{ color: 'red' }}>{error}</p>}
    <form className="formlogin" onSubmit={handleAddUser}>
      <div className="input-box mb-4">
        <span className="details" style={{textAlign: 'left', color:"white"}}>Username</span>
        <input type="text"
   placeholder="Masukkan Username"
   value={username}
   onChange={(e) => setUsername(e.target.value)}
   required
    style={{ width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '15px' }}  />
      </div>
      <div className="input-box mb-4">
        <span className="details" style={{textAlign: 'left', color:"white"}}>Kata sandi</span>
        <input
          
          placeholder="Masukkan Kata Sandi"
          type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
          style={{ width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '15px' }} 
        />
      </div>
      <div className="input-box mb-4">
        <span className="details" style={{textAlign: 'left', color:"white"}}>Konfirmasi Kata Sandi</span>
        <input
          
          placeholder="Masukkan Kata Sandi"
          type="password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              required
          style={{ width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '15px' }} 
        />
      </div>
      <div className="registration-login text-left mb-4">
        <p style={{ color: 'white' }}>
          Sudah punya akun? <a href="Login">Masuk</a>
        </p>
        
      </div>

      <div className="button mb-2">
        <input type="submit" value="Daftar" />
      </div>

      <center style={{  fontSize: '12px', color: 'white' }}>Atau</center>
      <div className="button">
        <div className="ggl1 mb-2">
          <img className="ggllogin" src={google} alt="google" />
        </div>
        <input type="submit" value="Daftar dengan google" />
      </div>
    </form>
    <div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {successMessage && <p style={{ color: 'red', fontSize: '20px' }}>{successMessage}</p>}
      </div>
  </div>
</div>
  
  );
};


export default Register;
