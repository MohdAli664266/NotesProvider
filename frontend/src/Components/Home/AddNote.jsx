import React, { useState } from "react";
import toast from "react-hot-toast";
import {getDatabase, ref, set} from "firebase/database";
import app from "../Firebase/Config";
import {useSelector} from "react-redux";
function AddNote() {
  const database = getDatabase(app);
  const [heading, setHeading] = useState("");
  const uid = useSelector((state)=>state.user.user.uid);
  const handle = async (e) => {
    e.preventDefault();
    const reference = ref(database, "notes/"+uid);
    set(reference, {
      note: heading,
    })
    toast.success("Note is added successfully");
  };
  
  return (
    <div>
      <div className="">
        <form onSubmit={handle} 
        className="bg-[yellow] flex justify-center items-center flex-col">
          <label for="heading"
          className="text-center">Notes Heading:</label>
          <br />
          <input
            className="text-[#0f0] outline-none px-2"
            type="text"
            id="heading"
            name="heading"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
          />
          <button className="px-2 bg-[#0f0] py-1 mt-2">Add</button>
        </form>
      </div>
    </div>
  );
}

export default AddNote;
