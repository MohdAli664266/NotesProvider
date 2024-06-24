import React, { useState } from "react";
import toast from "react-hot-toast";
import Marquee from "react-fast-marquee";
import Products from "../Products/Products";
import About from "../About/About";
import Background from "../../assets/ecommerce images/puma.jfif";
function Home() {
  const [cards, setCard] = useState([1, 2, 3, 4, 5, 4, 4]);
  const [search, setSearch] = useState("");
  const searchHandle = (e) => {
    e.preventDefault();
    if (search) {
      toast.success("Searched successfully");
      setSearch("");
    } else {
      toast.error("Enter Note name");
    }
  };
  return (
    <div className="relative z-10 top-16 px-24">
      <div className="absolute left-0 z-[-1] bg-black/75 p-24">
        <img
          src={Background}
          className="z-0 mix-blend-darken"
          alt=""
          srcSet=""
        />
      </div>
      <div className="flex overflow-hidden mx-10 rounded-md shadow-md shadow-gray-950 relative top-4">
        <input
          type="text"
          className="bg-[#fff]/75 w-full outline-none p-2 text-[#000] text-center"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          required
        />
        <button
          className="bg-[#000] px-4 shrink-0 hover:bg-[#000]/75 text-white"
          onClick={searchHandle}
        >
          Search
        </button>
      </div>

      <div className="m-10 flex justify-center items-center flex-col gap-10">
        <Marquee
          direction="right"
          className="text-6xl p-4 text-white/75 hover:text-white/65 cursor-pointer"
        >
          Welcome to Royal Shop!
        </Marquee>
        <p className="animate-bounce">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos vero
          officiis est! Illo a placeat modi explicabo commodi optio reiciendis
          quibusdam inventore nam tempora. Nemo voluptate ut sit consequatur
          iste!
        </p>
      </div>

      <div className="mt-[70%] flex justify-center items-center flex-col">
        <h1 className="text-6xl p-4 text-white/75 hover:text-white/65 cursor-pointer">
          Products
        </h1>
        <hr className="w-1/4 h-4" />
      </div>
      <h1 className="text-xl text-white">Electronics Items</h1>
      <div className="flex scrollbar-hide p-4 overflow-auto bg-[#fff]">
        {cards.map((item) => (
          <div key={Date.now()}>
            <Products />
          </div>
        ))}
      </div>
      <h1 className="text-xl text-black mt-8">Shoes</h1>
      <div className="flex scrollbar-hide p-4 overflow-auto bg-[#fff]">
        {cards.map((item) => (
          <div key={Date.now()}>
            <Products />
          </div>
        ))}
      </div>
      <About />
    </div>
  );
}

export default Home;
