import React from "react";
import "./Login.css";
import chill from "../Assets/chill.png";
import google from "../Assets/google.png";
import bgimage from "../Assets/bg1.jpeg";
const Login = () => {
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

    <form className="formlogin"action="#">
      <div className="input-box mb-4">
        <span className="details" style={{textAlign: 'left', color:"white"}}>Username</span>
        <input type="text"
    placeholder="Masukkan username"
    required
    style={{ width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '15px' }}  />
      </div>
      <div className="input-box mb-4">
        <span className="details" style={{textAlign: 'left', color:"white"}}>Kata sandi</span>
        <input
          type="password"
          placeholder="Masukkan password"
          required
          style={{ width: '100%', padding: '10px', boxSizing: 'border-box', borderRadius: '15px' }} 
        />
      </div>
      <div className="registration-login text-center mb-4">
        <p style={{ color: 'white' }}>
          Belum punya akun? <a href="login.html">daftar</a>
        </p>
        <a href="login.html">Lupa kata sandi?</a>
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
  </div>
</div>


  );
};

export default Login;
