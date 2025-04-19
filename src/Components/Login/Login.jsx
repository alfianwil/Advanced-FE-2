
import "./Login.css";
import chill from "../Assets/chill.png";
import google from "../Assets/google.png";
import bgimage from "../Assets/bg1.jpeg";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, loginUser } from '../../features/users/userSlice';
 
//import { loginUser } from '../../services/api/api.js';
 



/* function LoginPage() {
  // const [users, setUsers] = useState([]);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState('');
  const navigate = useNavigate(); // To navigate to another page after successful login

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve stored users from localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Check if the entered username and password match any stored user
    const user = storedUsers.find((user) => user.username === username && user.password === password);

    if (user) {
      setError(''); // Clear any error messages
      alert('Login successfully');
      // Redirect to the dashboard or home page upon successful login
      navigate('../Home'); // You can change '/home' to any route you want to redirect to
    } else {
      setError('Invalid username or password.'); // Set error if login fails
    }
  };


 */
  // useEffect(() => {
  //   const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
  //   setUsers(storedUsers);
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem('users', JSON.stringify(users));
  // }, [users]);

  // Check if the user is already logged in when the component mounts
 /* useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setIsLoggedIn(true);
    }
  }, []);*/



  
  // const handleLogout = () => {
  //   // Remove user data from localStorage and update the login state
  //   // localStorage.removeItem('user');
  //   // setIsLoggedIn(false);
  //   setIsLoggedIn(false);
  //   setCurrentUser(null);
  // };

  // const handleAddUser = () => {
  //   // Check if the username already exists
  //   const userExists = users.some((user) => user.username === username);
  //   if (userExists) {
  //     alert('Username already exists');
  //   } else {
  //     // Add a new user
  //     const newUser = { username, password };
  //     setUsers([...users, newUser]);
  //   }
  // };

  // const handleUpdateUser = () => {
  //   // Update the user's password
  //   const updatedUsers = users.map((user) => 
  //     user.username === currentUser.username 
  //       ? { ...user, password: password }
  //       : user
  //   );
  //   setUsers(updatedUsers);
  //   setCurrentUser({ ...currentUser, password });
  //   alert('Password updated successfully');
  // };

  // const handleDeleteUser = () => {
  //   // Delete the user from the list
  //   const updatedUsers = users.filter((user) => user.username !== currentUser.username);
  //   setUsers(updatedUsers);
  //   setIsLoggedIn(false);
  //   setCurrentUser(null);
  //   alert('User deleted successfully');
  // };

 /* const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Use useNavigate hook
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      // Call the login function to authenticate user
      const user = await loginUser(username, password);
  
      if (user) {
        // If user is found, redirect to home page
        navigate('../Home/');
      } else {
        // Show error if username or password don't match
        setError('Invalid username or password');
      }
    };*/
  
    const Login = () => {
      const navigate = useNavigate();
      const dispatch = useDispatch();
      const [form, setForm] = useState({ username: '', password: '' });
      const { currentUser, error } = useSelector((state) => state.users);
    
      useEffect(() => {
        dispatch(fetchUsers()); // Load users into global state
      }, [dispatch]);
    
      const handleLogin = (e) => {
        e.preventDefault();
        dispatch(loginUser(form));
      };

      useEffect(() => {
        if (currentUser) {
          navigate('/Home'); // 🔁 change this route to match your actual Home route
        }
      }, [currentUser, navigate]);
    
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
    className="absolute flex flex-col items-center justify-center p-8"
    style={{
      boxSizing: 'border-box',
      height: '590px',
      borderRadius: '5px',
      backgroundColor: '#282a2c',
      width: '100%',
      maxWidth: '400px', // Max width for the form
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
      Masuk
    </h1>
    
    <h3
      style={{
        color: 'white', // Ensure text is white
        fontSize: '1.25rem', // Adjust font size
        fontWeight: '500', // Medium weight
        marginBottom: '20px', // Add some spacing
      }}
    >
      Selamat datang kembali!
    </h3>
    {error && <p style={{ color: 'red' }}>{error}</p>}
    <form className="formlogin" onSubmit={handleLogin}>
      <div className="input-box mb-4">
        <span className="details" style={{textAlign: 'left', color:"white"}}>Username</span>
        <input type="text" value={form.username} onChange={(e) => setForm({ ...form, username: e.target.value })}
        required
    placeholder="Masukkan username"
    
    style={{ width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '15px' }}  />
      </div>
      <div className="input-box mb-4">
        <span className="details" style={{textAlign: 'left', color:"white"}}>Kata sandi</span>
        <input
          type="password"
          value={form.password} 
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
          placeholder="Masukkan password"
          
          style={{ width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '15px' }} 
        />
      </div>
      <div className="registration-login text-center mb-4">
        <p style={{ color: 'white' }}>
          Belum punya akun? <a  href="./Register">daftar</a>
        </p>
        <a href="../Updates">Lupa kata sandi?</a>
      </div>

      <div className="button mb-3">
        <input type="submit" value="Masuk" />
      </div>

      <center style={{  fontSize: '14px', color: 'white' }}>Atau</center>
      <div className="button">
        <div className="ggl1 mb-3">
          <img className="ggllogin" src={google} alt="google" />
        </div>
        <input type="submit" value="Masuk dengan google" />
      </div>
    </form>
    {error && <p style={{ color: 'red' }}>{error}</p>}
    {currentUser && <p>Welcome, {currentUser.username}!</p>}
  </div>
</div>
         // <div>
    // {/* {isLoggedIn ? (
    //   <div className="text-white">
    //     <h2>Welcome, {currentUser.username}!</h2>
    //     <button onClick={handleLogout}>Logout</button>
    //     <button onClick={handleUpdateUser}>Update Password</button>
    //       <button onClick={handleDeleteUser}>Delete Account</button>
    //   </div> ):( */} 
  );  
};  

  


export default Login;
