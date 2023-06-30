import "./App.css";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Modules from "./Pages/Modules/Modules";
import Home from "./Pages/Home/Home";
import FAQS from "./Pages/FAQ/FAQS";
import Company from "./Pages/Company/Company";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/Home" exact element={<Home />} />
        <Route path="/Modules" exact element={<Modules />} />
        <Route path="/FAQS" exact element={<FAQS />} />
        <Route path="/company" exact element={<Company />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
