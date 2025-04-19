import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Updates from './Components/Updates/Updates';
import ListView from './Components/ListView/ListView';
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
        <Route path="/Updates" element={<Updates />} />
        <Route path="/ListView" element={<ListView />} />
      </Routes>
    </Router>


  );
}



export default App;
