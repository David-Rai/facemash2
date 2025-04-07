import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ addition }) => {
  return (
    <nav
      className={`h-[10vh]
        m-[10px] rounded-full
        text-gray-800 bg-white/80 backdrop-blur-3xl
        lg:w-[40%] 
        w-full flex items-center justify-evenly ${addition}`}
    >
      <Link to="/">Home</Link>
      <Link to="/gender">Gender</Link>
      <Link to="/favourite">Favourites</Link>
    </nav>
  );
};

export default Nav;
