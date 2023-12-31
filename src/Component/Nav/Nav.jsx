import React from "react";
import { Link, Outlet } from "react-router-dom";
export default function Nav(props) {
  return (
    <div className="w-full h-[100px] flex items-center justify-between px-[100px] ">
      <Link to="/LandingPage">
        <img
          src="https://erigostore.co.id/cdn/shop/files/LOGO_ERIGO_FIT.jpg?v=1677643716"
          alt=""
          className="w-[105px]"
        />
      </Link>
      <div className="">
        <ul className="flex">
          <li className="mx-[20px] text-[15px] font-bold cursor-pointer">
            Erigo
          </li>
          <li className="mx-[20px] text-[15px] font-bold cursor-pointer">
            Collection
          </li>
          <li className="mx-[20px] text-[15px] font-bold cursor-pointer">
            Erigo Tour
          </li>
          <li className="mx-[20px] text-[15px] font-bold cursor-pointer">
            Track Order
          </li>
        </ul>
      </div>
      <div className="flex items-center ">
        <div className="font-bold cursor-pointer">
          {props.userEmail ? (
            `${props.userEmail}`
          ) : (
            <Link to="/Signup">Sign In/Sign Up</Link>
          )}
        </div>

        <div className="ml-[20px] cursor-pointer">
          <i className="bx bx-search text-[24px]"></i>
        </div>
        <div className="ml-[20px] cursor-pointer">
          <i className="bx bx-like text-[24px]"></i>
        </div>
        <div className="ml-[20px] cursor-pointer">
          <i className="bx bx-cart text-[24px]"></i>
        </div>
        <div className="ml-[20px] cursor-pointer">
          <i className="bx bxl-product-hunt text-[24px]"></i>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
