import React, { useEffect, useState } from "react";
import random from "../assets/jh.png";
const imgs = import.meta.glob("../assets/overview/*.{png,jpg,jpeg,svg}");


const Home = () => {
  useEffect(() => {
    const loadImages = async () => {
      const imagePaths = await Promise.all(
        Object.keys(imgs).map(async (path) => {
          const module = await imgs[path]();
          return module.default;
        })
      );
      setImages((prevImages) => prevImages.map((images, index) => (images = {...images, src: imagePaths[index]})));
    };
    loadImages();
  }, [])

  const [images, setImages] = useState([
    {
      header: "New York City",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Possimus, dolor",
    },
    {
      header: "New York City",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Possimus, dolor",
    },
    {
      header: "New York City",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Possimus, dolor",
    },
    {
      header: "New York City",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Possimus, dolor",
    },
    {
      header: "New York City",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Possimus, dolor",
    },
    {
      header: "New York City",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit.Possimus, dolor",
    },
  ]);

  return (
    <div className="font-body text-white bg-body flex flex-col">
      <div className="flex flex-col gap-10 bg-component mt-2 rounded-2xl mx-2">
        <div className="flex flex-row">
          <div className="w-96 h-96"></div>
          <div className="w-96 h-96"></div>
          <div className="flex flex-row">
            <div className="flex flex-col basis-[600px] gap-10 text-center justify-center">
              <h1 className="text-4xl font-bold">
                Welcome to <span className="text-blue-500">🛆O🯀▢</span> Image
                Gallery
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Debitis, earum aliquam tempore beatae inventore odio, ipsum
                totam blanditiis explicabo maiores velit distinctio placeat!
                Dolores ipsum temporibus impedit corporis aspernatur atque odit
                culpa esse eius. Id assumenda corrupti veniam modi ad.
              </p>
            </div>
            <div className="flex items-center w-96 h-96">
              <img src={random} alt="" />
            </div>
          </div>
          <div className="w-96 h-96"></div>
          <div className="w-96 h-96"></div>
          <div className="w-96 h-96"></div>
        </div>
        <div className="flex flex-col bg-some pt-10 mb-36 pb-10">
          <div className="flex justify-center mb-10">
            <h1 className="text-2xl font-bold">View Latest Images</h1>
          </div>
          <div className="flex no-wrap overflow-x-auto flex-row gap-10 for-scroll-bar">
            {images.map((image, index) => (
              <div key={index} className="flex flex-col flex-shrink-0 pb-3 bg-card rounded-2xl card-width border-white border-2 border-opacity-15">
                <div className="w-full rounded-t-2xl overflow-hidden mb-5">
                  <img src={image.src} alt="" />
                </div>
                <div className="flex flex-col ml-3 p-3 border-l-4 border-blue-500 ">
                  <h1 className="font-semibold">{image.header}</h1>
                  <p>{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
