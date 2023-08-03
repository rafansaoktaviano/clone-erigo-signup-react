import React from "react";
import FormGroup from "../FormGroup/FormGroup";
import Button from "../Button/Button";
import GoogleSignIn from "../GoogleSignIn/GoogleSignIn";
import "./../../Support : tailwinds/utils.css";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
export default function SignUpContent(props) {
  const [inputValue, setInputValue] = useState(null);
  const [data, setData] = useState(null);
  const refFirstName = useRef();
  const refLastName = useRef();
  const refEmail = useRef();
  const refPassword = useRef();

  const refEmailLogin = useRef()
  const refPasswordLogin = useRef()

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/users");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };



  const onSubmitSignUp = async () => {

    try {
      const dataToSend = {
        firstname: refFirstName.current.value,
        lastname: refLastName.current.value,
        email: refEmail.current.value,
        password: refPassword.current.value,
      };

      const response = await axios.get(`http://localhost:5000/users?email=${dataToSend.email}`)
      
      if(response.data.length > 0) return toast.error('Email Already Registered')
      // 2. Make sure length password minimum 6 character
      if(dataToSend.password.length < 5) return toast.error('Password Have Minimum 6 Characters')

      await axios.post(`http://localhost:5000/users`, {...dataToSend})

      toast.success('Register Success!')
    } 
    catch (error) {
      console.log(error + ">>>>");
    }
  };

  

  useEffect(() => {
    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="w-full px-[100px] h-full mt-[30px]">
      <div className="border-[1px] flex h-max test">
        <div className="w-2/4 kiri">
          <div className="h-[50px] flex items-center justify-center font-bold bg-zinc-100">
            {props.text1}
          </div>
          <div className="m-[30px]">
            <FormGroup
              title="Email"
              placehold="Email"
              htmlFor="gege5"
              id="gege5"
              ref={refEmailLogin}

            />
            <FormGroup
              title="Password"
              placehold="Password"
              htmlFor="gege4"
              id="gege4"
              ref={refPasswordLogin}


            />
            <Button
              label="Login"
              css="py-[5px] px-[24px] mt-[40px] font-bold border-black rounded-lg shadow-lg shadow-black-200"
              onclick={() => props.handleLoginFromPage(refEmailLogin, refPasswordLogin)}
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
        <div className="w-2/4 kanan">
          <div className=" h-[50px] flex justify-center items-center bg-zinc-100 font-bold">
            {props.text2}
          </div>
          <div className="m-[30px]">
            <p>{props.head}</p>

              <FormGroup
                title="First Name"
                placehold="Input Your First Name"
                ref={refFirstName}
                htmlFor="gege1"
                id="gege1"
              />
              <FormGroup
                title="Last Name"
                placehold="Input Your Last Name"
                ref={refLastName}
                htmlFor="gege2"
                id="gege2"
              />
              <FormGroup
                title="Your Email Address"
                placehold="Input Your Email Adress"
                ref={refEmail}
                htmlFor="gege3"
                id="gege3"
              />
              <FormGroup
                title="Your Password"
                placehold="Input Your Adress"
                ref={refPassword}
                htmlFor="gege4"
                id="gege4"
              />

              <div className="flex cursor-pointer ">
                <input
                  type="checkbox"
                  id="gege"
                  className="mr-[10px] cursor-pointer"
                />
                <label htmlFor="gege" className="cursor-pointer">
                  I agree to the terms and conditions
                </label>
              </div>

              <Button
                label="CREATE AN ACCOUNT"
                css="py-[10px] px-[20px] mt-[20px] border-[1px] font-bold border-black rounded-lg shadow-lg shadow-black-200"
                onclick={onSubmitSignUp}
              />

          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
