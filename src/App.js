import logo from "./logo.svg";
import "./App.css";
import SignUpPages from "./Pages/SignUpPages/SignUpPages";
import LandingPages from "./Pages/LandingPages/LandingPages";
import { Routes, Route } from "react-router-dom";
import Nav from "./Component/Nav/Nav";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const [email, setEmail] = useState("")
  const navigate = useNavigate()

  const onSubmitLogin = async (refEmailLogin,refPasswordLogin) => {
    // event.preventDefault()
    try {
      // const response = await axios.get(`http://localhost:5000/users?email=${refEmail.current.value}&password=${refPassword.current.value}`)
      const response = await axios.get(
        `http://localhost:5000/users?email=${refEmailLogin.current.value}&password=${refPasswordLogin.current.value}`
      );

      console.log(response);
      if (!response.data.length)
        return toast.error("Login Failed, Input Your Credentials");

      toast.success("Login Sucess");
      setTimeout(() => {
        setEmail(response.data[0].email)
        navigate('/')
      }, 3000)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="grid">
      <Nav  userEmail={email}/>
      <Routes>
        <Route path="/" element={<LandingPages />} />
        <Route path="/SignUp" element={<SignUpPages  handleLoginFromApp={onSubmitLogin}/>} />
        <Route path="/LandingPage" element={<LandingPages  />} />
      </Routes>
      <Toaster/>
    </div>
  );
}

export default App;
