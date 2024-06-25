import React from "react";
import Shoe from "../../assets/ecommerce images/1shoe.jfif";
import { CiStar } from "react-icons/ci";
import toast from "react-hot-toast";
function CartSample() {
  const star = [1, 2, 3, 4];
  const handle = ()=>
    {
        toast.success("Payment Success");
    }
  return (
    <div className="bg-white/50 grid grid-cols-3 w-full">
      <div className="bg-[red]">
        <img src={Shoe} alt="" />
      </div>
      <div className="px-4 text-left flex flex-col gap-4">
        <h1 className="text-4xl">Description</h1>
        <p className="text-2xl font-thin">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non modi,
          illum
        </p>

        <p>
          Review :
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit id quos
            fugiat reiciendis temporibus, voluptate maxime, debitis optio totam,
            quidem deserunt porro
          </span>{" "}
        </p>
        <p className="flex items-center">
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
        <form action="" className="bg-[red] flex flex-col text-black">
            <label htmlFor="">Enter ATM number</label>
            <input type="number" className="w-full" placeholder="Number" />
        </form>
        <button className="bg-black text-white" onClick={handle}>Payment</button>
      </div>
    </div>
  );
}

export default CartSample;
