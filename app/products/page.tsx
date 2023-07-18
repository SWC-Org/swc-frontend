"use client";

import ProductCard from "@components/cards/ProductCard";
import React from "react";

export default function page() {
  return (
    <div className=" flex flex-col gap-4 items-center justify-center p-10">
      <h1 className=" text-3xl font-bold ">Select one Product and Continue</h1>
      <p className="text-center">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore ipsum
        voluptates est voluptas? Quia ipsam ipsum quo corrupti temporibus eius
        quaerat cupiditate aliquid unde, quam praesentium? Quod laudantium quasi
        vel!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
        ipsum voluptates est voluptas? Quia ipsam ipsum quo corrupti temporibus
        eius quaerat
      </p>
      {/* product cards */}
      <div className=" flex gap-5 p-8 rounded-lg bg-purple-800">
        <ProductCard
          onClick={() => {}}
          title={"Plantation Shutters"}
          description={
            "quaerat cupiditate aliquid unde, quam praesentium? Quod laudantium quasi"
          }
          imageURL={
            "https://johnlewis.scene7.com/is/image/JohnLewis/shutters-Shutterly-main-block?resMode=sharp"
          }
        />
        <ProductCard
          onClick={() => {}}
          title={"Roller Blinds"}
          description={
            "quaerat cupiditate aliquid unde, quam praesentium? Quod laudantium quasi"
          }
          imageURL={
            "https://chronos-stores.com/wp-content/uploads/2019/02/Jet-Black-Roller-Blind.jpg"
          }
        />
        <ProductCard
          onClick={() => {}}
          title={"Curtains"}
          description={
            "quaerat cupiditate aliquid unde, quam praesentium? Quod laudantium quasi"
          }
          imageURL={
            "https://curtainsdirect2u.co.uk/cdn/shop/products/THERM30G-2.jpg?v=1650018238"
          }
        />
      </div>
    </div>
  );
}
