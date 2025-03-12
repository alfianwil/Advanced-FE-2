import "./Register.css";
import React, { useState, useEffect } from 'react';
import bgimage from "../Assets/bg1.jpeg";
import chill from "../Assets/chill.png";
import google from "../Assets/google.png";
import { useNavigate } from 'react-router-dom';

function Register(){

  const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);
  
  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  
  // Load users from localStorage when the component mounts
  const handleRegister = (e) => {
    e.preventDefault();

    // Validate password and confirmation match
    if (password !== passwordConfirm) {
      setError('Passwords do not match.');
      return;
    }

    // Check if the username already exists in localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = storedUsers.some((user) => user.username === username);

    if (userExists) {
      setError('Username already exists.');
      return;
    }

    // Create a new user and save it to localStorage
    const newUser = { username, password };
    storedUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(storedUsers));
    alert('User registered successfully!');
    navigate('/login');
  };


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
    <form className="formlogin" onSubmit={handleRegister}>
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
  </div>
</div>
  
  );
};

export default Register;
