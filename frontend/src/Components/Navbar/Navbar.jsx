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
  const user = useSelector(state => state.user.user);
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
      <nav className="flex justify-between items-center bg-[#5197cf]">
        <div>
          <NavLink to="/home">
            <img className="w-16 cursor-pointer" src={logo} alt="" srcSet="" />
          </NavLink>
        </div>
        <div>
          <h1 className="text-bold text-[#3bfffc] text-xl cursor-pointer">{user?.displayName || user?.phoneNumber}</h1>
        </div>
        <div>
          <IoMenu
            className={`text-3xl ${toggle ? "hidden" : "block"}`}
            onClick={handle}
          />
          <IoClose
            className={`text-3xl ${toggle ? "block" : "hidden"}`}
            onClick={handle}
          />
        </div>
      </nav>
      <div
        className={`absolute ${
          toggle ? "right-0" : "right-[100%]"
        }  bg-[#0e0e08]/85 w-full text-white h-fit`}
      >
        <ul className="px-4">
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
          {logout && <NavLink to="about" onClick={logoutHandle}>
            <li>Logout</li>
          </NavLink>}
        </ul>
      </div>
    </>
  );
}

export default Navbar;
