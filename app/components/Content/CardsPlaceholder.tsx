import React from "react";
import Cards from "@/images/cards.png";
import Image from "next/image";

const CardsPlaceholder = () => (
  <>
    <h3 className="text-center lg:mt-20 lg:font-weight-600 text-[16px] lg:text-[20px]">
      Let’s check what awaits you in career <br />
      and finances in the near future
    </h3>
    <Image src={Cards} alt="cards" width="438" height="321" />
    <p className="hidden lg:block">Take a deep breath</p>
  </>
);

export default CardsPlaceholder;
