/*import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import MyWork from "./pages/MyWork";
import NaturHistoriskMuseum from "./pages/NaturHistoriskMuseum";
import SplashScreen from "./components/SplashScreen";

function App() {
  const [showSplash, setShowSplash] = useState(false);

  useEffect(() => {
    // Check if splash was already shown before
    const hasSeenSplash = localStorage.getItem("hasSeenSplash");

    if (!hasSeenSplash) {
      setShowSplash(true);
    }
  }, []);

  const handleFinishSplash = () => {
    localStorage.setItem("hasSeenSplash", "true"); // mark splash as seen
    setShowSplash(false);
  };

  return (
    <Router>
      {showSplash ? (
        <SplashScreen onFinish={handleFinishSplash} />
      ) : (
        <>
          {/* Navbar always visible */ /*}
          <NavBar />

          {/* Page content */ /*}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mywork" element={<MyWork />} />
            <Route
              path="/mywork/naturhistoriskmuseum"
              element={<NaturHistoriskMuseum />}
            />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
*/
import { useState } from "react";
import {Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import MyWork from "./pages/MyWork";
import NaturHistoriskMuseum from "./pages/NaturHistoriskMuseum";
import SplashScreen from "./components/SplashScreen";
import Experience from "./pages/Experience";
import About from "./pages/About";
import { VideoProvider } from "./context/VideoContext";
import FeaturedProjects from "./pages/FeaturedProjects";


function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <VideoProvider>
    
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <>
          {/* Navbar always visible */}
          <NavBar />

          {/* Pages contents */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mywork" element={<MyWork />} />
            <Route path="/featured-projects/naturhistoriskmuseum"
              element={<NaturHistoriskMuseum />}
            />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/featured-projects" element={<FeaturedProjects />} />
          </Routes>
        </>
      )}
    
    </VideoProvider>
  );
}

export default App;
