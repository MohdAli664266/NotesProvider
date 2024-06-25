import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Error from "./Components/Error/Error.jsx";
import Login from "./Components/Login/Login.jsx";
import Home from "./Components/Home/Home.jsx";
import Signup from "./Components/Signup/Signup.jsx";
import { Provider } from "react-redux";
import Store from "./Components/Store/Store.js";
import AddNote from "./Components/Home/AddNote.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import MyCart from "./Components/MyCart/MyCart.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "mycart",
        element: <MyCart />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "addnote",
        element: <AddNote />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);
document.getElementById("root").style.backgroundColor = "#E3E6E6"
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={Store}>
      <RouterProvider router={router} />
      <Toaster />
    </Provider>
  </React.StrictMode>
);
