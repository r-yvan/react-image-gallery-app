import React from "react";
import temp from "../assets/temp.jpg";
import random from "../assets/jh.png";

const Home = () => {
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
            <div className="flex flex-col flex-shrink-0 bg-card rounded-2xl p-3 card-width border-white border-2 border-opacity-15">
              <div className="w-full rounded-2xl overflow-hidden mb-5">
                <img src={temp} alt="" />
              </div>
              <div className="flex flex-col pl-8 border-l-4 border-blue-500 ">
                <h1 className="font-semibold">New York City</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Possimus, dolor.
                </p>
              </div>
            </div>
            <div className="flex flex-col flex-shrink-0  bg-card rounded-2xl p-3 card-width border-white border-2 border-opacity-15">
              <div className="w-full rounded-2xl overflow-hidden mb-5">
                <img src={temp} alt="" />
              </div>
              <div className="flex flex-col pl-8 border-l-4 border-blue-500 ">
                <h1 className="font-semibold">New York City</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Possimus, dolor.
                </p>
              </div>
            </div>
            <div className="flex flex-col flex-shrink-0  bg-card rounded-2xl p-3 card-width border-white border-2 border-opacity-15">
              <div className="w-full rounded-2xl overflow-hidden mb-5">
                <img src={temp} alt="" />
              </div>
              <div className="flex flex-col pl-8 border-l-4 border-blue-500 ">
                <h1 className="font-semibold">New York City</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Possimus, dolor.
                </p>
              </div>
            </div>
            <div className="flex flex-col flex-shrink-0  bg-card rounded-2xl p-3 card-width border-white border-2 border-opacity-15">
              <div className="w-full rounded-2xl overflow-hidden mb-5">
                <img src={temp} alt="" />
              </div>
              <div className="flex flex-col pl-8 border-l-4 border-blue-500">
                <h1 className="font-semibold">New York City</h1>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Possimus, dolor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
