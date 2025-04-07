import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ addition }) => {
  return (
    <nav
      className={`h-[10vh] 
    w-full bg-gray-400 flex items-center justify-evenly ${addition}`}
    >
      <Link to="/">Home</Link>
      <Link to="/gender">Gender</Link>
      <Link to="/favourite">Favourites</Link>
    </nav>
  );
};

export default Nav;
