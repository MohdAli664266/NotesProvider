import React, { useState } from "react";
import toast from "react-hot-toast";
function Footer() {
  const [email, setEmail] = useState("");
  const emailHandle = (e) => {
    e.preventDefault();
    toast.success("Thank you! we will contact you soon on " + email);
    setEmail("");
  };
  return (
    <div className="grid grid-cols-2 gap-4 w-full bg-[#cecece] px-20 py-4 relative top-16">
      <div className="flex justify-center items-center flex-col shadow-sm shadow-gray-950 p-2">
        <h1 className="text-lg">Stay Connected</h1>
        <form
          onSubmit={emailHandle}
          className="flex overflow-hidden m-2 rounded-md shadow-md shadow-gray-950"
        >
          <input
            type="email"
            className=" w-full outline-none px-2 text-[#0f0]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            required
          />
          <button className="bg-[#0f0] px-2 shrink-0">Eamil</button>
        </form>
      </div>

      <div className="shadow-sm shadow-gray-950 p-2">
        <h1 className="text-lg">
          Follow us on social media Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </h1>
      </div>
    </div>
  );
}

export default Footer;
