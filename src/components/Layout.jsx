import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-body">
      <div className="flex flex-row justify-center items-center text-white font-body mt-2 mx-2 space-x-8 bg-component rounded-2xl overflow-hidden">
        <Link to="/" className="font-bold duration-200 hover:text-blue-500">
          Home
        </Link>
        <Link
          to="/overview"
          className="font-bold duration-200 hover:text-blue-500"
        >
          Overview
        </Link>
        <Link
          to="/categories"
          className="font-bold duration-200 hover:text-blue-500"
        >
          Categories
        </Link>
        <input
          type="search"
          className="rounded-full bg-some outline-none p-2 pl-4 m-2"
          placeholder="Search"
        />
        <div></div>
      </div>

      <Outlet />
    </div>
  );
};

export default Layout;
