import React, { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import image2 from "../../assests/image 2.png";
import "./navbar.css";
import Dropdown from "./Dropdown";
import frame from "../../assests/Frame2.png";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
          <img src={image2} alt="image" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li
            className="nav-item"
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <Link to="/Modules" className="nav-links" onClick={closeMobileMenu}>
              Modules <i className="fas fa-caret-down" aria-hiddern="false" />
            </Link>
            {dropdown && <Dropdown />}
          </li>

          <li className="nav-item">
            <Link to="/FAQS" className="nav-links" onClick={closeMobileMenu}>
              FAQS
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/ABOUT" className="nav-links" onClick={closeMobileMenu}>
              Company <img src={frame} alt="frame" />
            </Link>
          </li>
          <li>
            <Link
              to="/schedule"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Schedule a demo
            </Link>
          </li>
        </ul>
        <Button />
      </nav>
    </>
  );
}

export default Navbar;

// import React, { useState } from "react";
// import "./navbar.css"; // Import your custom CSS file for styling
// import logo from "../../assests/image 2.png";
// const Navbar = () => {
//   const [showLinks, setShowLinks] = useState(false);

//   const handleToggle = () => {
//     setShowLinks(!showLinks);
//   };

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <div className="logo-container">
//           <img src={logo} alt="logo-image" />
//         </div>
//         <div className={showLinks ? "nav-links-mobile" : "nav-links"}>
//           <ul>
//             <li>Home</li>
//             <li>Home</li>
//             <li>Home</li>
//             <li>Home</li>
//           </ul>
//         </div>
//         <div className="button-navbar">
//           <button1 className="button-space">Schedule a Demo</button1>
//         </div>

//         <button className="mobile-menu-icon" onClick={handleToggle}>
//           {showLinks ? (
//             <i className="fa-solid fa-bars"></i>
//           ) : (
//             <i className="fas fa-bars"></i>
//           )}
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
