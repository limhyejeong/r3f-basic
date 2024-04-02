import React from "react";
import { Link } from "react-router-dom";
import { Data } from './data.json'

function Header(props) {

  return (
    <header>
      <Link to="/">
        <h1>home</h1>
      </Link>
      <ul>
        { Data.map( prod => (
          <li key={prod.id}>
            <Link to={`/geometry/${prod.id}`}>{prod.title}</Link>
          </li>
        ))}
      </ul>

      {/* <Link to="/geometry/box">
        <h1>Box</h1>
      </Link>
      <Link to="/geometry/sphere">
        <h1>Sphere</h1>
      </Link> */}
    </header>
  );
}

export default Header;
