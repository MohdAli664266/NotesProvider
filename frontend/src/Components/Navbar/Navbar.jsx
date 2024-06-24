import React, { useEffect, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuth, signOut } from "firebase/auth";
import app from "../Firebase/Config";
import { useDispatch } from "react-redux";
import { setUser } from "../Store/Reducer/Reducer";
import { toast } from "react-hot-toast";
function Navbar() {
  const dispatch = useDispatch();
  const [logout, setLogout] = useState(false);
  const user = useSelector((state) => state.user.user);
  const check = () => {
    const auth = getAuth(app);
    const currentUser = auth.currentUser;
    if (currentUser) {
      setLogout(true);
      dispatch(setUser(currentUser));
    }
  };
  useEffect(() => {
    check();
  }, [logout, check]);

  const logoutHandle = () => {
    const auth = getAuth(app);
    signOut(auth)
      .then((response) => {
        setLogout(false);
        dispatch(setUser({}));
        toast.success("Logout successfully");
      })
      .catch((error) => console.log(error));
  };

  const [toggle, setToggle] = useState(false);
  const handle = () => {
    setToggle(!toggle);
  };
  return (
    <>
      <nav className="flex justify-between items-center bg-[#1d2831] fixed w-full z-20 px-20">
        <div>
          <NavLink to="/home">
            <img className="w-16 cursor-pointer" src={logo} alt="" srcSet="" />
          </NavLink>
        </div>
        <div className="text-white">
          <ul className="flex justify-center items-center gap-8 text-xl">
            <NavLink to="home" className={({isActive}) => `${isActive ? "border-b-2 border-white" : "border-none"}`} onClick={(e) => toast.success("Working")}>
              <li className="cursor-pointer hover:text-white/75">Home</li>
            </NavLink>
            <NavLink to="login" className={({isActive}) => `${isActive ? "border-b-2 border-white text-white/80" : "border-none"}`} onClick={(e) => toast.success("Working")}>
            <li className="cursor-pointer hover:text-white/75">Shop</li>
            </NavLink>
            <NavLink to="service" className={({isActive}) => `${isActive ? "border-b-2 border-white" : "border-none"}`} onClick={(e) => toast.success("Working")}>
            <li className="cursor-pointer hover:text-white/75">Service</li>
            </NavLink>
            <NavLink to="about" className={({isActive}) => `${isActive ? "border-b-2 border-white" : "border-none"}`} onClick={(e) => toast.success("Working")}>
            <li className="cursor-pointer hover:text-white/75">About</li>
            </NavLink>
          </ul>
          <h1 className="text-bold text-[#3bfffc] text-xl cursor-pointer">
            {user?.displayName || user?.phoneNumber}
          </h1>
        </div>
        <div>
          <IoMenu
            className={`text-3xl text-white cursor-pointer  ${toggle ? "hidden" : "block"}`}
            onClick={handle}
          />
          <IoClose
            className={`text-3xl text-white cursor-pointer ${toggle ? "block" : "hidden"}`}
            onClick={handle}
          />
        </div>
      </nav>
      <div
        className={`absolute z-50 top-16 ${
          toggle ? "right-0" : "right-[100%]"
        }  bg-[#0e0e08]/85 w-full text-white h-fit`}
      >
        <ul className="py-4 px-20 flex flex-col gap-4">
          {!logout ? (
            <NavLink to="login" onClick={(e) => setToggle(!toggle)}>
              <li>Login</li>
            </NavLink>
          ) : (
            <NavLink to="profile" onClick={(e) => setToggle(!toggle)}>
              <li>Profile</li>
            </NavLink>
          )}

          {!logout ? (
            <NavLink to="signup" onClick={(e) => setToggle(!toggle)}>
              <li>Signup</li>
            </NavLink>
          ) : (
            <NavLink to="addnote" onClick={(e) => setToggle(!toggle)}>
              <li>AddNote</li>
            </NavLink>
          )}

          <NavLink to="services" onClick={(e) => setToggle(!toggle)}>
            <li>Services</li>
          </NavLink>
          <NavLink to="about" onClick={(e) => setToggle(!toggle)}>
            <li>About</li>
          </NavLink>
          {logout && (
            <NavLink to="login" onClick={logoutHandle}>
              <li>Logout</li>
            </NavLink>
          )}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
