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
            <a href="/FAQs"> FAQS</a>
          </li>
          <li>
            <a href="/Company">Company</a>
          </li>
        </ul>
        <button>
          Schedule a Demo <ArrowForwardIosIcon />
        </button>
      </div>
    </nav>

    // <div className="navbar">
    //   <nav>
    //     <div className="logo-container">
    //       <img src={image2} alt="image" />
    //     </div>
    //     <div className="nav-links">
    //       <ul>
    //         <li>
    //           <a href="">HOME</a>
    //         </li>
    //         <li>
    //           <a href="">Modules</a>
    //         </li>
    //         <li>
    //           <a href=""> FAQS</a>
    //         </li>
    //         <li>
    //           <a href="">Company</a>
    //         </li>
    //       </ul>
    //       <button>
    //         Schedule a Demo <ArrowForwardIosIcon />
    //       </button>
    //     </div>
    //   </nav>
    // </div>
  );
};

export default navbar;
