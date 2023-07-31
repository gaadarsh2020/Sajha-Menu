import React from "react";
import "./Button.css";
import { Link } from "react-router-dom";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

export function Button() {
  return (
    <Link to="/schedule">
      <button className="btn">
        Schedule a Demo <ArrowForwardIosIcon className="forward-Icon" />
      </button>
    </Link>
  );
}
