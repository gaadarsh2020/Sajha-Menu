import React from "react";
import image2 from "../../assests/image 2.png";
import "./navbar.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={image2} alt="image" />
      </div>
      <div class="nav-links">
        <ul>
          <li>
            <Link to="/Home">HOME</Link>
          </li>
          <li>
            <Link to="/Modules">Modules</Link>
          </li>
          <li>
            <Link to="/FAQs"> FAQS</Link>
          </li>
          <li>
            <Link to="/About">Company</Link>
          </li>
        </ul>
        <Link to="/schedule">
          <button>
            Schedule a Demo <ArrowForwardIosIcon />
          </button>
        </Link>
      </div>
    </nav>
  );
};
// import React, { useState } from "react";
// import logo from "../../assests/image101.png";
// import { Link } from "react-router-dom";
// import "./navbar.css";
// import ReorderIcon from "@mui/icons-material/Reorder";

// function Navbar() {
//   const [openLinks, setopenLinks] = useState(false);
//   const toggelNavbar = () => {
//     setopenLinks(!openLinks);
//   };
//   return (
//     <div className="navbar">
//       <div className="leftSide" id={openLinks ? "open" : "close"}>
//         <img src={logo} alt="logo" />
//         <div className="hiddenLinks">
//           <Link to="/">Home</Link>
//           <Link to="/menu">Menu</Link>
//           <Link to="/about">About</Link>
//           <Link to="/contact">Contact</Link>
//         </div>
//       </div>
//       <div className="rightSide">
//         <Link to="/">Home</Link>
//         <Link to="/menu">Menu</Link>
//         <Link to="/about">About</Link>
//         <Link to="/contact">Contact</Link>
//         <button onClick={toggelNavbar}>
//           <ReorderIcon />
//         </button>
//       </div>
//     </div>
//   );
// }
export default navbar;
