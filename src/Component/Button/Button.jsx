import React from "react";

const Button =  (props) => {
  return (
    <button type="submit" className={`px-[12px] py-[24px] border-[3px] ${props.css}`} onClick={props.onclick} {...props}>
      {props.label}
    </button>
  );
};

export default Button;