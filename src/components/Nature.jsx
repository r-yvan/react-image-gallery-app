import React from "react";
import temp from "../assets/fantasy/temp.jpg"

const Nature = () => {
  return (
    <div className="text-white font-body bg-body">
      <div className="bg-component mt-2 mx-2 rounded-2xl">
        <div className="flex justify-center text-4xl font-bold mb-10 rounded-2xl pt-4">
          <h2>Nature</h2>
        </div>
        <div className="flex flex-wrap flex-row gap-3 -w-full h-full pl-28">
          <div className="flex flex-col flex-shrink-0 bg-card rounded-2xl p-2 pb-4 card-width border-white border-2 border-opacity-15">
            <div className="w-full rounded-2xl overflow-hidden mb-5">
              <img src={temp} alt="" />
            </div>
            <div className="flex flex-col pl-8 border-l-4 border-blue-500 ">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Possimus, dolor.
              </p>
            </div>
          </div>
          <div className="flex flex-col flex-shrink-0 bg-card rounded-2xl p-2 card-width border-white border-2 border-opacity-15">
            <div className="w-full rounded-2xl overflow-hidden mb-5">
              <img src={temp} alt="" />
            </div>
            <div className="flex flex-col pl-8 border-l-4 border-blue-500 ">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Possimus, dolor.
              </p>
            </div>
          </div>
          <div className="flex flex-col flex-shrink-0 bg-card rounded-2xl p-2 card-width border-white border-2 border-opacity-15">
            <div className="w-full rounded-2xl overflow-hidden mb-5">
              <img src={temp} alt="" />
            </div>
            <div className="flex flex-col pl-8 border-l-4 border-blue-500 ">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Possimus, dolor.
              </p>
            </div>
          </div>
          <div className="flex flex-col flex-shrink-0 bg-card rounded-2xl p-2 card-width border-white border-2 border-opacity-15">
            <div className="w-full rounded-2xl overflow-hidden mb-5">
              <img src={temp} alt="" />
            </div>
            <div className="flex flex-col pl-8 border-l-4 border-blue-500">
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Possimus, dolor.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nature;
