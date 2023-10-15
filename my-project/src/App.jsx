import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./page/Home"
import Haircut from "./page/Haircut"
import Massage from "./page/Massage"
import Facial from "./page/Facial"
import Mua from "./page/Mua"
import Waxing from "./page/Waxing"

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/haircut" element={<Haircut />} />
        <Route path="/massage" element={<Massage />} />
        <Route path="/facial" element={<Facial />} />
        <Route path="/mua" element={<Mua />} />
        <Route path="/mani" element={<Mani />} />
        <Route path="/waxing" element={<Waxing />} />
      </Routes>
    </Router>
  )
}

export default App
