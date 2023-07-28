import React from "react";

export default function GoogleSignIn(props) {
  return (
    <div className="border-[1px] border-black flex w-[200px] h-[50px] items-center my-[20px] cursor-pointer">
      <i className={`bx bxl-google-plus text-[32px] mx-[10px] text-red-800 ${props.test}`}></i>
      <div className="text-purple-900 font-semibold" >{props.signName}</div>
    </div>
  );
}
