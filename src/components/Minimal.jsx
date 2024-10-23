import React, { useState, useEffect } from "react";

const images = import.meta.glob("../assets/minimal/*.{png,jpg,jpeg,svg}");

const Minimal = () => {
  const [minimalImages, setMinimalImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isImageSelected, setIsImageSelected] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      const imagePaths = await Promise.all(
        Object.keys(images).map(async (path) => {
          const module = await images[path]();
          return module.default;
        })
      );
      setMinimalImages(imagePaths);
    };
    loadImages();
  }, []);

  useEffect(() => {
    if (isImageSelected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isImageSelected]);

  return (
    <div className="text-white font-body bg-body">
      <div className="bg-component mt-2 mx-2 rounded-2xl pb-10">
        <div className="flex justify-center text-4xl font-bold mb-10 rounded-2xl pt-4">
          <h2>Minimal</h2>
        </div>
        <div className="flex flex-wrap flex-row gap-5 w-full h-full pl-16">
          {minimalImages.map((image, index) => (
            <div
              key={index}
              className="flex flex-col flex-shrink-0 bg-card rounded-2xl card-width border-white border-2 border-opacity-15 cursor-pointer"
              onClick={() => {
                setSelectedImage(image);
                setIsImageSelected(true);
              }}
            >
              <div className="w-full rounded-2xl overflow-hidden">
                <img src={image} alt={`Minimal ${index}`} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {isImageSelected && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50"
          onClick={() => setIsImageSelected(false)} 
        >
          <div
            className="relative bg-component rounded-2xl shadow-lg overflow-hidden p-2"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Selected"
              className="rounded-2xl selected-image-width"
            />
            <button
              className="absolute top-5 right-7 py-1 px-3 rounded-full border-2 border-white border-opacity-20 text-white bg-blue-500 bg-opacity-20 font-bold text-2xl"
              onClick={() => setIsImageSelected(false)}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Minimal;
