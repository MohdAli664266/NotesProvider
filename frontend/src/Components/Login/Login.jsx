import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "../Store/Reducer/Reducer";
import {
  signInWithPhoneNumber,
  getAuth,
  RecaptchaVerifier,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import app from "../Firebase/Config";
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [process, setProcess] = useState("Submit");

  const loginWithGoogle = async (e) => {
    e.preventDefault();
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();
    await signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        dispatch(setUser(user));
        toast.success("Login successfully");
        navigate("/home");
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  const sendOTP = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth(app);
      const appVerifier = new RecaptchaVerifier(auth, "abc", {
        size: "invisible",
      });
      await signInWithPhoneNumber(auth, email, appVerifier)
        .then((resp) => {
          window.confirmationResult = resp;
          setOtp(true);
        })
        .catch((error) => {
          console.log("Catch Error: " + error);
        });
    } catch (error) {
      console.log("Network Error " + error);
    }
  };

  const confirmOTP = async (e) => {
    console.log(password);
    await window.confirmationResult
      .confirm(password)
      .then((res) => {
        toast.success("OTP verified");
        dispatch(setUser(res.user));
        navigate("/");
      })
      .catch((err) => {
        toast.error("Invalid OTP");
      });
  };
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="shadow-lg flex flex-col gap-4 justify-center items-center text-[#8aaaee] shadow-gray-950 rounded-3xl max-w-lg mt-4 px-4">
          {!otp && (
            <form
              onSubmit={sendOTP}
              className="flex flex-col justify-center items-center w-full px-4 py-4 gap-4"
            >
              <h1 className="text-xl sm:text-3xl px-5 py-2 font-bold">
                Login Form
              </h1>
              <div>
                <input
                  className={`shadow-md bg-transparent rounded-full py-1 px-2 outline-none text-black ${
                    otp ? "hidden" : "block"
                  }`}
                  type="text"
                  placeholder="Number with country code"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <p className={`${otp ? "block" : "hidden"} text-[#0f0]`}>
                  OPT is sent on {email}
                </p>
                <input
                  className={`shadow-md bg-transparent rounded-full sm:px-2 py-1 text-black outline-none ${
                    otp ? "block" : "hidden"
                  }`}
                  type="password"
                  placeholder="Enter the OTP"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required={otp}
                />
              </div>

              <p className="px-2">
                If you are new user then?{" "}
                <NavLink to="../signup" className="underline">
                  Signup First
                </NavLink>
              </p>
              <p id="abc"></p>
              <button
                type="submit"
                disabled={disabled}
                className="bg-[#8aaaee] rounded-full text-[#fff] px-10 my-2 text-md"
              >
                {otp ? "Confirm" : process}
              </button>
            </form>
          )}
          {otp && 
          <div className="flex justify-center items-center flex-col">
            <h1 className="text-2xl font-bold text-black text-center">Enter OTP</h1>
            <p className="text-[#0f0]">OTP is sent on {password} number</p>
            </div>}
          {otp && (
            <div className=" flex rounded-lg overflow-hidden shadow-md shadow-gray-950 mt-2">
              <input
                type="text"
                className="bg-transparent w-full px-2 py-1  outline-none text-black"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                className="px-2 bg-[#8aaaee] shrink-0 text-[#fff] text-md"
                onClick={confirmOTP}
              >
                {" "}
                confirmOTP
              </button>
            </div>
          )}

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

export default Login;
