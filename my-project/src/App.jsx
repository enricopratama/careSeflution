import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./page/Home"
import Haircut from "./page/Haircut"

import Result from "./page/Result"
import Profile from "./page/Profile"
import Register from "./page/Register"

import Massage from "./page/Massage"
import Facial from "./page/Facial"
import Mua from "./page/Mua"
import Mani from "./page/Mani"
import Waxing from "./page/Waxing"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import History from "./page/History"

import Favorites from "./page/Favorites"
import Confirmation from "./page/Confirmation"




function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/haircut" element={<Haircut />} />

        <Route path="/result" element={<Result />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />

        <Route path="/massage" element={<Massage />} />
        <Route path="/facial" element={<Facial />} />
        <Route path="/mua" element={<Mua />} />
        <Route path="/mani" element={<Mani />} />
        <Route path="/waxing" element={<Waxing />} />
        <Route path="/history" element={<History />} />
        <Route path="/register" element={<Register />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/confirmation" element={<Confirmation />} />



      </Routes>
      <Footer />
    </Router>
  )
}

export default App
