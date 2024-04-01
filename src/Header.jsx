import React from "react";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <Link to="/">
        <h1>home</h1>
      </Link>
      <Link to="/geometry/">
        <h1>geometry</h1>
      </Link>
    </header>
  );
}

export default Header;
