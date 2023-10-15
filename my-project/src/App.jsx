import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./page/Home"
import Haircut from "./page/Haircut"
import Result from "./page/Result"
import Profile from "./page/Profile"
import Register from "./page/Register"

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/haircut" element={<Haircut />} />
        <Route path="/result" element={<Result />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  )
}

export default App
