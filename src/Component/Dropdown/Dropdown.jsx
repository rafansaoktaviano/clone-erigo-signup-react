import { Dropdown } from "flowbite-react";
import Drop from "../Drop/Drop";

export default function InlineDropdown(props) {
  return (
    <Dropdown className="" inline label="Collection">
      <Drop dropId="check1" htmlFor="check1" dropName="PANTS"/>
      <Drop dropId="check2" htmlFor="check2" dropName="BAG"/>
      <Drop dropId="check3" htmlFor="check3" dropName="VARSITY"/>
      <Drop dropId="check4" htmlFor="check4" dropName="BOMBER"/>
      <Drop dropId="check5" htmlFor="check5" dropName="PARKA"/>
      <Drop dropId="check6" htmlFor="check6" dropName="HOODIE"/>
     
    </Dropdown>
  );
}
