"use client";

import { Carousel } from "flowbite-react";
import React from "react";

export default function CarouselComp() {
  return (
    <div className="h-[750px]">
      <Carousel slideInterval={3000}>
        <img
          alt="..."
          src="https://erigostore.co.id/cdn/shop/files/Banner_Website_Desktop_Basic_Tshirt_Logo_copy.jpg?v=1686221171"
        />
        <img
          alt="..."
          src="https://erigostore.co.id/cdn/shop/files/Banner_Website_Desktop_Glenn_copy.jpg?v=1686909617"
        />
        <img
          alt="..."
          src="https://erigostore.co.id/cdn/shop/files/Banner_Website_Desktop_Denim_Pants_copy.jpg?v=1688644876"
        />
        <img
          alt="..."
          src="https://erigostore.co.id/cdn/shop/files/Banner_Website_Desktop_Glenn_copy.jpg?v=1686909617"
        />
        <img
          alt="..."
          src="https://erigostore.co.id/cdn/shop/files/Erigo_DesktopBanner.jpg?v=1685335795"
        />
        <img
          alt="..."
          src="https://erigostore.co.id/cdn/shop/files/Banner_Website_Desktop_Flannel_copy_86f53171-bedf-4dbf-abd8-3088f6e246cc.jpg?v=1690213542"
        />
      </Carousel>
    </div>
  );
}
