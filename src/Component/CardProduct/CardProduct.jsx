import React from "react";

export default function CardProduct(props) {
  return (
    <div className="w-[280px] mt-[40px] border-[1px] border-black-400 rounded-[10px] cursor-pointer">
      <div className="w-full ">
        <img className="h-[350px] object-cover rounded-tr-[10px] rounded-tl-[10px]" src={props.item.image[0]}></img>
      </div>
      <div className="p-[10px]">
        <h5 className="text-[16px] font-bold tracking-tight text-gray-900 dark:text-white truncate w-[220px] mt-[10px] mb-[10px]">
          {props.item.productName}
        </h5>
        <p className="font-normal text-red-700 dark:text-gray-400">
          {props.item.price}
        </p>
      </div>
    </div>

    // <div className="h-[400px] w-[200px] mt-[40px] flex  p-0">
    //   <div className="w-full h-[100px]">
    //     <img className="w-full h-[100px]" src={props.item.image[0]} />
    //   </div>
    //   <div>
    //     <h5 className="text-[16px] font-bold tracking-tight text-gray-900 dark:text-white truncate w-[220px]">
    //       {props.item.productName}
    //     </h5>
    //     <p className="font-normal text-red-700 dark:text-gray-400">
    //       {props.item.price}
    //     </p>
    //   </div>
    // </div>
  );
}
