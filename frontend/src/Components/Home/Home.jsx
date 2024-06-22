import React, { useState } from "react";
import NoteCard from "./NoteCard";
import toast from "react-hot-toast";
function Home() {
  const [cards, setCard] = useState([1, 2]);
  const [search, setSearch] = useState("");
  const searchHandle = (e)=>
    {
      e.preventDefault();
      if(search)
        {
          toast.success("Searched successfully");
          console.log(search);
        }else
        {
          toast.error("Enter Note name");
        }
    }
  return (
    <div>
      <div className="flex overflow-hidden m-4 rounded-md shadow-md shadow-gray-950">
        <input
          type="text"
          className=" w-full outline-none p-1 text-[#0f0]"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          required
        />
        <button className="bg-[#0f0] px-2 shrink-0" onClick={searchHandle}>
          Search
        </button>
      </div>
      <div className="grid grid-cols-2 gap-2 m-4">
        {cards.map((card, index) => (
          <div key={index}>
            <NoteCard card={card} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
