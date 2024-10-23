import React from "react";
import temp from "../assets/fantasy/temp.jpg";
import { useEffect, useState } from "react";
const imgs = import.meta.glob("../assets/overview/*.{png,jpg,jpeg,svg}");

const Overview = ({ goToHome }) => {
  useEffect(() => {
    const loadImages = async () => {
      const imagePaths = await Promise.all(
        Object.keys(imgs).map(async (path) => {
          const module = await imgs[path]();
          return module.default;
        })
      );
      setImages((prevImages) =>
        prevImages.map(
          (images, index) => (images = { ...images, src: imagePaths[index] })
        )
      );
    };
    loadImages();
  }, []);

  const [images, setImages] = useState([{}, {}, {}, {}, {}, {}]);

  return (
    <div className="text-white font-body bg-body">
      <div className="bg-component mt-2 mx-2 rounded-2xl">
        <div className="flex justify-center text-4xl font-bold mb-10 rounded-2xl pt-4">
          <h2>Overview</h2>
        </div>
        <div className="flex flex-wrap flex-row gap-5 w-full h-full pl-28">
          {images.map((image) => (
            <div className="flex flex-col flex-shrink-0 bg-card rounded-2xl card-width border-white border-2 border-opacity-15">
              <div className="w-full rounded-2xl overflow-hidden">
                <img src={image.src} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Overview;
