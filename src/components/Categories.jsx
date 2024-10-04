import React from "react";
import temp from "../assets/temp.jpg";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="bg-component mt-2 mx-2 rounded-2xl text-white font-body">
      <div className="flex justify-center text-4xl font-bold mb-10 rounded-2xl pt-4">
        <h2>Categories</h2>
      </div>
      <div className="flex flex-wrap flex-row gap-3 -w-full h-full pl-28">
        <Link
          to="/categories/nature"
          className="flex flex-col flex-shrink-0 bg-card rounded-2xl p-2 pb-4 card-width border-white border-2 border-opacity-15"
        >
          <div className="w-full rounded-2xl overflow-hidden mb-5">
            <img src={temp} alt="" />
          </div>
          <div className="flex flex-col pl-8 border-l-4 border-blue-500 ">
            <p className="text-2xl font-bold">Nature</p>
          </div>
        </Link>
        <Link
          to="/categories/military"
          className="flex flex-col flex-shrink-0 bg-card rounded-2xl p-2 card-width border-white border-2 border-opacity-15"
        >
          <div className="w-full rounded-2xl overflow-hidden mb-5">
            <img src={temp} alt="" />
          </div>
          <div className="flex flex-col pl-8 border-l-4 border-blue-500 ">
            <p className="text-2xl font-bold">Military</p>
          </div>
        </Link>
        <Link
          to="/categories/animals"
          className="flex flex-col flex-shrink-0 bg-card rounded-2xl p-2 card-width border-white border-2 border-opacity-15"
        >
          <div className="w-full rounded-2xl overflow-hidden mb-5">
            <img src={temp} alt="" />
          </div>
          <div className="flex flex-col pl-8 border-l-4 border-blue-500 ">
            <p className="text-2xl font-bold">Animals</p>
          </div>
        </Link>
        <Link
          to="/categories/fantasy"
          className="flex flex-col flex-shrink-0 bg-card rounded-2xl p-2 card-width border-white border-2 border-opacity-15"
        >
          <div className="w-full rounded-2xl overflow-hidden mb-5">
            <img src={temp} alt="" />
          </div>
          <div className="flex flex-col pl-8 border-l-4 border-blue-500">
            <p className="text-2xl font-bold">Fantasy</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Categories;
