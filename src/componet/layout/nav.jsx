import React from "react";
import { NavLink } from "react-router-dom";
import './nav.css'

 const Nav = () => {
  return (
    <nav className="bordes">
      <ul>
        <li>
          <NavLink style={{textDecoration:'none', color:'green'}} to="/">Harry Books - Tienda Online</NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Nav;