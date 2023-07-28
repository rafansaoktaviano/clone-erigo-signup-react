import React from "react";
import FormGroup from "../FormGroup/FormGroup";
import Button from "../Button/Button";
import GoogleSignIn from "../GoogleSignIn/GoogleSignIn";
export default function SignUpContent(props) {
  return (
    <div className="w-full px-[100px] h-full">
      <div className="border-[1px] flex h-max ">
        <div className="w-2/4 ">
          <div className="h-[50px] flex items-center justify-center font-bold bg-zinc-100">
            {props.text1}
          </div>
          <div className="m-[30px]">
            <FormGroup title="Email" placehold="Email" />
            <FormGroup title="Angoro" placehold="AHDAWHDlaw" />
            <FormGroup title="Password" placehold="Password" />
            <Button
              btnName="Login"
              btncss="py-[10px] px-[24px] mt-[40px] font-bold border-black rounded-lg shadow-lg shadow-black-200"
            />
            <GoogleSignIn sign="bx bxl-google-plus" signName="Sign In Google" />
            <p className="pb-[10px]">
              Forgot your password ? or{" "}
              <a href="" className="border-b-[3px] border-black">
                Return to store
              </a>
            </p>
          </div>
        </div>
        <div className="w-2/4">
          <div className=" h-[50px] flex justify-center items-center bg-zinc-100 font-bold">
            {props.text2}
          </div>
          <div className="m-[30px]">
            <p>{props.head}</p>
            <FormGroup title="First Name" placehold="Input Your First Name" />
            <FormGroup title="Last Name" placehold="Input Your Last Name" />
            <FormGroup
              title="Your Email Address"
              placehold="Input Your Email Adress"
            />
            <FormGroup title="Your Password" placehold="Input Your Adress" />
            <div className="flex cursor-pointer " >
                <input type="checkbox" id="gege"  className="mr-[10px] cursor-pointer"/>
                <label for="gege" className="cursor-pointer">I agree to the terms and conditions</label>
            </div>
            <Button
              btnName="CREATE AN ACCOUNT"
              btncss="py-[15px] px-[24px] mt-[20px] border-[1px] font-bold border-black rounded-lg shadow-lg shadow-black-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
