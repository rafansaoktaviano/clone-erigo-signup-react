import React from "react";

export default function Button(props) {
  return (
    
    <button className={`px-[12px] py-[24px] border-[3px] ${props.btncss}`}>
      {props.btnName}
    </button>
  );
}
