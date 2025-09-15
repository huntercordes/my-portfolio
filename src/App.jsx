import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import MyWork from "./pages/MyWork";
import NaturHistoriskMuseum from "./pages/NaturHistoriskMuseum";

function App() {
  return (
    <Router>
      {/* Navbar always visible */}
      <NavBar />

      {/* Page content changes below */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mywork" element={<MyWork />} />
        <Route path="/mywork/naturhistoriskmuseum" element={<NaturHistoriskMuseum />} />
      </Routes>
    </Router>
  );
}

export default App;

