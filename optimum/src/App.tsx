import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Contact from "./components/Contact";
import Services from "./pages/Services";
import FAQs from "./components/FAQs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact-us" element={<Contact />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/FAQs" element={<FAQs />} />
      </Routes>
      <Navbar />
    </Router>
  );
}

export default App;
