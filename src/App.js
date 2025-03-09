import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>


      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </Router>


  );
}



export default App;
