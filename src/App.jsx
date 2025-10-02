import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import Home from "./Home"
import About from "./About"

function App() {
  return (
    <Router>
      <nav style={{ margin: "20px" }}>
        <Link to="/home" style={{ marginRight: "15px" }}>Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  )
}

export default App
