import React from "react";
import Nav from "../../Component/Nav/Nav";
import FormGroup from "../../Component/FormGroup/FormGroup";
import SignUpContent from "../../Component/SignUpContent/SignUpContent";
export default function SignUpPages() {
  return (
    <div>
      <Nav/>
      <SignUpContent
        text1="RETURNING CUSTOMER"
        text2="NEW CUSTOMER"
        head="Register with us for a faster checkout,
to track the status of your order and more."
      />
    </div>
  );
}
