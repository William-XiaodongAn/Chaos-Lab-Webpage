import ButtonGroup from "./components/Menu";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import Home from "./pages/Home";
import AboutUs from "./pages/About Us";
import Research from "./pages/Research";
import People from "./pages/People";
import Publication from "./pages/Publication";
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About Us" element={<AboutUs />} />
          <Route path="/Research" element={<Research />} />
          <Route path="/People" element={<People />} />
          <Route path="/Publication" element={<Publication />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
