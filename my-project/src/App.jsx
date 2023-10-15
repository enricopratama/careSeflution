import "./App.css"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./page/Home"
import Haircut from "./page/Haircut"

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/haircut" element={<Haircut />} />
      </Routes>
    </Router>
  )
}

export default App
