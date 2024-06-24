import React from "react";
import Pic from "../../assets/ecommerce images/top3.jpg";

function About() {
  return (
    <div className="mt-4">
        <h1 className="text-6xl text-center font-bold text-[#353636] hover:text-[#414343]">About Us</h1>
      <div className="grid grid-cols-2">
        <div className="bg-white p-4">
          <img className="" src={Pic} alt="" srcSet="" />
        </div>
        <div className="bg-[#717373] flex flex-col justify-center items-center text-white  px-10 gap-4">
          <h1 className="text-4xl">Description</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sint
            maiores aut! Saepe ullam neque ex ut possimus quidem provident
            excepturi veniam est assumenda fugiat officia sequi, mollitia
            suscipit repellendus!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sint
            maiores aut! Saepe ullam neque ex ut possimus quidem provident
            excepturi veniam est assumenda fugiat officia sequi, mollitia
            suscipit repellendus!
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
