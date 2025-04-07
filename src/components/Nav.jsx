import React from "react";
import { Link } from "react-router-dom";
import Gender from "./Gender";

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
        <Gender />
      <Link to="/favourite">Favourites</Link>
    </nav>
  );
};

export default Nav;
