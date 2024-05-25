import { Route, Routes } from "react-router-dom"
import Navbar from "./Navbar"
import About from "./pages/About"
import Admin from "./pages/Admin"
import Complaint from "./pages/Complaint"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import StayAware from "./pages/StayAware"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/complaint" element={<Complaint />} />
          <Route path="/StayAware" element={<StayAware />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/about" element={<About />} />
          <Route path="/Register" element={<Register/>}/> 
        </Routes>
      </div>
    </>
  )
}

export default App
