import React from "react";
// import tokyo from "../assets/nature/backiee-100438-landscape.jpg";

const Animals = () => {
  const animalImages = Object.keys(
    import.meta.glob("../assets/fantasy/*.{jpg,png}")
  );

  return (
    <div className="text-white font-body bg-body">
      <div className="bg-component mt-2 mx-2 rounded-2xl">
        <div className="flex justify-center text-4xl font-bold mb-10 rounded-2xl pt-4">
          <h2>Animals</h2>
        </div>
        {animalImages.map((animalImage, index) => {
          <div key={index} className="">
            <img src={animalImage} alt="" />
          </div>;
        })}
      </div>
    </div>
  );
};

export default Animals;
