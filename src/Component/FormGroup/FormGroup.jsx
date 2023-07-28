import React from "react";

export default function FormGroup(props) {
  return (
    <div className="w-full h-auto mb-[20px]">
      <h1 className="mb-[10px]">{props.title}</h1>
      <input placeholder={`${props.placehold}`} type="text" className="w-[380px] h-[40px] px-[12px] py-[7px] border-[2px] rounded-sm" />
    </div>
  );
}
