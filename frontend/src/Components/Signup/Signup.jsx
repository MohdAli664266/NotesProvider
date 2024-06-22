import React, { useState } from 'react'
import {toast} from 'react-hot-toast';
import { NavLink } from 'react-router-dom';
function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [process, setProcess] = useState("Submit");
  const login = (e)=>
  {
    e.preventDefault();
    toast.success("Working successfully");
  }
  const loginWithGoogle = (e)=>
  {
    e.preventDefault();
    toast.success("Working successfully");
  }
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="shadow-lg flex flex-col gap-4 justify-center items-center text-[#8aaaee] shadow-gray-950 rounded-3xl max-w-lg mt-4">
          <form
            onSubmit={login}
            className="flex flex-col justify-center items-center w-full px-4 py-4 gap-4"
          >
            <h1 className="text-xl sm:text-3xl px-5 py-2 font-bold">
              Signup Form
            </h1>
            <div>
              <input
                className="shadow-md bg-transparent rounded-full sm:px-2 py-1 outline-none text-black"
                type="text"
                placeholder="Enter the Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <input
                className="shadow-md bg-transparent rounded-full sm:px-2 py-1 text-black outline-none"
                type="password"
                placeholder="Enter the Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <p className="px-2">
              If you are already registered{" "}
              <NavLink to="../login" className="underline">
                Login
              </NavLink>
            </p>
            <button
              type="submit"
              disabled={disabled}
              className="bg-[#8aaaee] rounded-full text-[#fff] px-10 my-2 text-md"
            >
              {process}
            </button>
          </form>
          <div className="pb-4">
            <button className="px-2" onClick={loginWithGoogle}>
              Login with google
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup