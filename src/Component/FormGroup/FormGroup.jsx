import React from "react";

const FormGroup = React.forwardRef((props, ref) => {
  return (
    <div className="w-full h-auto mb-[20px] flex flex-col ">
      <label htmlFor={props.htmlFor} className="mb-[10px]">{props.title}</label>
      <input ref={ref}  placeholder={`${props.placehold}`} type="text" id={props.id} className="w-[380px] h-[40px] px-[12px] py-[7px] border-[2px] rounded-sm" />
    </div>
  );
})


export default FormGroup