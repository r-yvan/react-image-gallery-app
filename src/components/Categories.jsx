import React from "react";
import { Link } from "react-router-dom";

import natureImage from "../assets/nature/backiee-279126-landscape.jpg";
import militaryImage from "../assets/military/backiee-108798-landscape.jpg";
import fantasyImage from "../assets/fantasy/backiee-276788-landscape.jpg";
import cyberpunkIMage from "../assets/cyberpunk/backiee-282702-landscape.jpg";
import carsImage from "../assets/cars/backiee-275620-landscape.jpg";
import minimalImage from "../assets/minimal/backiee-218349-landscape.jpg";
import cityImage from "../assets/city/moscowScape.jpg";
import artisticImage from "../assets/fantasy/backiee-294538-landscape.jpg";

const categories = [
  {
    name: "Nature",
    path: "/categories/nature",
    src: natureImage,
  },
  {
    name: "Military",
    path: "/categories/military",
    src: militaryImage,
  },
  {
    name: "Animals",
    path: "/categories/animals",
    src: fantasyImage,
  },
  {
    name: "Fantasy",
    path: "/categories/fantasy",
    src: fantasyImage,
  },
  {
    name: "Cyberpunk",
    path: "/categories/cyberpunk",
    src: cyberpunkIMage,
  },
  {
    name: "Cars",
    path: "/categories/cars",
    src: carsImage,
  },
  {
    name: "Minimal",
    path: "/categories/minimal",
    src: minimalImage,
  },
  {
    name: "City",
    path: "/categories/city",
    src: cityImage,
  },
  {
    name: "Artistic",
    path: "/categories/artistic",
    src: artisticImage,
  },
];

const Categories = () => {
  return (
    <div className="bg-component mt-2 mx-2 rounded-2xl text-white font-body pb-10">
      <div className="flex justify-center text-4xl font-bold mb-10 rounded-2xl pt-4">
        <h2>Categories</h2>
      </div>
      <div className="flex flex-wrap flex-row gap-5 w-full h-full pl-28">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={category.path}
            className="flex flex-col flex-shrink-0 bg-card w-96 rounded-xl border-white border-2 border-opacity-15 duration-200 hover:border-blue-500 hover:border-opacity-45 hover:scale-95"
          >
            <div className="w-full rounded-xl overflow-hidden mb-3">
              <img src={category.src} alt={category.name} className="opacity-90 duration-200 hover:opacity-100" />
            </div>
            <div className="flex flex-col ml-3 mb-3 border-l-4 border-blue-500">
              <p className="text-2xl font-bold ml-3">{category.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
