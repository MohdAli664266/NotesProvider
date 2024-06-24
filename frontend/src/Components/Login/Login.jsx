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
import Background from "../../assets/ecommerce images/4shoe.jfif";
import { FaGoogle } from "react-icons/fa6";
function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState(false);
  const [otpNumber, setOtpNumber] = useState();
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
    setDisabled(true);
    e.preventDefault();
    try {
      const auth = getAuth(app);
      const appVerifier = new RecaptchaVerifier(auth, "abc", {
        size: "invisible",
      });
      await signInWithPhoneNumber(auth, phone, appVerifier)
        .then((resp) => {
          window.confirmationResult = resp;
          setOtp(true);
          setDisabled(false);
        })
        .catch((error) => {
          console.log("Catch Error: " + error);
        });
    } catch (error) {
      console.log("Network Error " + error);
    }
  };

  const confirmOTP = async (e) => {
    setDisabled(true);
    await window.confirmationResult
      .confirm(otpNumber)
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
      <div className="w-full flex justify-center relative top-16 z-10 bg-white">
        <div className="h-screen overflow-hidden z-0 bg-black/85 px-24">
          <img
            src={Background}
            className="z-0 mix-blend-darken"
            alt=""
            srcSet=""
          />
        </div>
        <div className="shadow-lg grid grid-cols-2 text-white shadow-gray-950 bg-white/10 absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
          <div className="bg-white/50 py-20 px-16 text-black flex flex-col gap-4">
            <h1 className="text-4xl font-bold">Welcome Sir</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Aspernatur exercitationem earum consectetur facilis hic distinctio
              soluta voluptatibus dignissimos amet cum, fugiat{" "}
            </p>
          </div>
          <div className="flex justify-center items-center flex-col gap-4 px-10 backdrop-blur-md">
            {!otp && (
              <form
                onSubmit={sendOTP}
                className="flex flex-col justify-center items-center w-full px-4 gap-4"
              >
                <h1 className="text-xl sm:text-3xl px-5 py-2 font-bold">
                  Login Form
                </h1>
                <div>
                  <label htmlFor="number">
                    Number with country code
                  </label>
                  <input
                    className={`shadow-md rounded-sm w-full py-1 px-2 outline-none text-black`}
                    type="text"
                    placeholder="+91"
                    value={phone}
                    id="number"
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>

                
                <p id="abc"></p>
                <button
                  type="submit"
                  disabled={disabled}
                  className="bg-[#8aaaee] rounded-sm w-full text-[#fff] px-10 my-2 text-md"
                >
                  {otp ? "Confirm" : process}
                </button>
              </form>
            )}
            {otp && (
              <div className="flex justify-center items-center flex-col">
                <h1 className="text-2xl font-bold text-black text-center">
                  Enter OTP
                </h1>
                <p className="text-[#0f0]">OTP is sent on {phone} number</p>
              </div>
            )}
            {otp && (
              <div className=" flex rounded-sm overflow-hidden shadow-md shadow-gray-950 mt-2">
                <input
                  type="text"
                  className="w-full px-2  outline-none text-black"
                  value={otpNumber}
                  onChange={(e) => setOtpNumber(e.target.value)}
                />
                <button
                  className="px-2 bg-[#8aaaee] shrink-0 text-[#fff] text-md"
                  onClick={confirmOTP}
                >
                  {" "}
                  Verify
                </button>
              </div>
            )}

            <div className="w-full px-4">
              <div className="w-full bg-white/30 flex items-center justify-center gap-2">
                <FaGoogle />
                <button
                  className=""
                  disabled={disabled}
                  onClick={loginWithGoogle}
                >
                  Login with google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
