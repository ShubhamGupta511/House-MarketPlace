import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Explore from "./pages/Explore";
import Offers from "./pages/Offers";
import ForgetPassword from "./pages/ForgetPassword";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Explore/>}/>
          <Route path="/forget" element={<ForgetPassword/>}/> 
          <Route path="/offers" element={<Offers/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
        </Routes>
        <Navbar/>
      </Router>
    </>
  );
}

export default App;
