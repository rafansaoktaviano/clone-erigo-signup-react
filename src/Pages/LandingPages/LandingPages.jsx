import React from "react";
import Nav from "../../Component/Nav/Nav";
import CarouselComp from "../../Component/Carousell/Carousel";
import CardProduct from "../../Component/CardProduct/CardProduct";
import SearchBar from "../../Component/SearchBar/SearchBar";
import Dropdown from "./../../Component/Dropdown/Dropdown";
import { useEffect, useState } from "react";
import axios from "axios";

const LandingPages = () => {
  const [products, setProducts] = useState(null);

  const onFetchData = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/products");
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onFetchData();
  }, []);

  if (!products) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <CarouselComp />
      <div className="flex px-[100px] mt-[100px]">
        <div className="w-2/12 p-[10px]">
          <Dropdown />
          <Dropdown />

        </div>
        <div className="w-10/12">
          <SearchBar />
          <div className="flex justify-start gap-[100px] flex-wrap">
            {products.map((value, index) => {
              return <CardProduct item={value} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPages;
