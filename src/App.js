import "./App.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Modules from "./Pages/Modules/Modules";
import Home from "./Pages/Home/Home";
import FAQS from "./Pages/FAQ/FAQS";
import About from "./Pages/AboutUs/About";
import Schedule from "./Pages/Schedule Button/Schedule";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Home" exact element={<Home />} />
        <Route path="/Modules" exact element={<Modules />} />
        <Route path="/FAQS" exact element={<FAQS />} />
        <Route path="/About" exact element={<About />} />
        <Route path="/schedule" exact element={<Schedule />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
