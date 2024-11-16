import Navbar from "./Navbar"
import Engage1 from "./pages/Engage1"
import Engage2 from "./pages/Engage2"
import Explore from "./pages/Explore"
import Explain from "./pages/Explain"
import Extend from "./pages/Extend"
import Evaluate from "./pages/Evaluate"
import References from "./pages/References"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/engage1" element={<Engage1 />} />
          <Route path="/engage2" element={<Engage2 />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/explain" element={<Explain />} />
          <Route path="/extend" element={<Extend />} />
          <Route path="/evaluate" element={<Evaluate />} />
          <Route path="/references" element={<References />} />
        </Routes>
      </div>
    </>
  )
}

export default App
