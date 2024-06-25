import React from "react";
import Shoe from "../../assets/ecommerce images/1shoe.jfif";
import { CiStar } from "react-icons/ci";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import UPI from "../../assets/upi.png";
import Paytm from "../../assets/paytm.png";
function CartSample() {
  const star = [1, 2, 3, 4];
  const handle = () => {
    toast.success("Payment Success");
  };
  return (
    <div className="bg-white/50 grid grid-cols-3 w-full">
      <div className=" p-4">
        <img className="mix-blend-darken" src={Shoe} alt="" />
      </div>
      <div className="p-4 text-left flex flex-col sm:gap-4 gap-2">
        <h1 className="sm:text-3xl text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum expedita accusantium saepe
        </h1>
        <p>
          Review : 
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit id quos
            fugiat reiciendis temporibus, voluptate maxime, debitis optio totam,
            quidem deserunt porro
          </span>{" "}
        </p>
        <p className="flex items-center text-yellow-500">
          Rating :{" "}
          {star.map((s) => (
            <CiStar />
          ))}
        </p>
        <p>
          Price : <strong>$50</strong> only
        </p>
      </div>

      <div className="bg-white/30 px-4 text-left flex flex-col gap-4">
        <h1>Payment Method</h1>
        <div className="w-full p-2 flex bg-white justify-center items-center rounded-sm overflow-hidden">
          <button className="w-full text-start font-bold" onClick={handle}>
            Google Pay
          </button>
          <div className="flex justify-center items-center rounded-sm outline-none bg-white p-0.5">
            <FcGoogle />
            <strong>Pay</strong>
          </div>
        </div>
        <div className="w-full p-2 flex bg-white justify-center items-center rounded-sm overflow-hidden">
          <button className="w-full text-start font-bold" onClick={handle}>
            Paytm
          </button>
          <div className="flex justify-center items-center rounded-sm outline-none bg-white p-0.5">
            <img className="w-14" src={Paytm} alt="" />
          </div>
        </div>
        <div className="w-full p-2 flex bg-white justify-center items-center rounded-sm overflow-hidden">
          <button className="w-full text-start font-bold" onClick={handle}>
           UPI
          </button>
          <div className="flex justify-center items-center rounded-sm outline-none bg-white p-0.5">
            <img className="w-14" src={UPI} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartSample;
