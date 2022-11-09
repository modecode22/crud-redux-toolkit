import React from 'react'
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <div className="flex justify-between items-center bg-slate-200 shadow-sm shadow-sky-100 text-white p-5 h-20">
      <div className="flex gap-5">
        <NavLink to={"/"} end>
          <h1 className="p-2  rounded-lg hover:shadow-none cursor-pointer flex items-center justify-center bg-sky-500 hover:bg-sky-400  shadow-sm shadow-sky-200">
            Home
          </h1>
        </NavLink>
        <NavLink to={"/post/add"}>
          <h1 className="flex items-center justify-center bg-sky-500 p-2 rounded-lg hover:shadow-none cursor-pointer hover:bg-sky-400  shadow-sm shadow-sky-200">
            Add Post
          </h1>
        </NavLink>
      </div>
      <NavLink className={"/login"}>
        <div className="flex items-center justify-center bg-sky-500 hover:bg-sky-400  shadow-sm shadow-sky-200 p-2 rounded-lg hover:shadow-none cursor-pointer">
          login
        </div>
      </NavLink>
    </div>
  );
}

export default Header