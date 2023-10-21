"use client";

import ProductCard from "@components/cards/ProductCard";
import CurtainComponent from "@components/agent/products/CurtainComponent";
import PlantaionShutterComponent from "@components/agent/products/Plantation-ShuttersComponent";
import RollerBlinderComponent from "@components/agent/products/Roller-blindsComponent";
import React, { useState } from "react";

export default function ProductComponent({
  window_data,
  window_data_deleteHandler,
  window_data_editHandler,
}) {
  const [pageNumber, setPageNumber] = useState(0);

  const cancelFunc = () => {
    setPageNumber(0);
  };

  switch (pageNumber) {
    case 1:
      return <CurtainComponent cancelFunc={cancelFunc} data={{}} />;
    case 2:
      return <PlantaionShutterComponent cancelFunc={cancelFunc} data={{}} />;
    case 3:
      return <RollerBlinderComponent cancelFunc={cancelFunc} data={{}} />;
    default:
      return (
        <div className="flex flex-col gap-4 items-center justify-center p-10">
          <h1 className="text-3xl font-bold">
            Select one Product and Continue
          </h1>
          <p className="text-center">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
            ipsum voluptates est voluptas? Quia ipsam ipsum quo corrupti
            temporibus eius quaerat cupiditate aliquid unde, quam praesentium?
            Quod laudantium quasi vel! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Labore ipsum voluptates est voluptas? Quia ipsam
            ipsum quo corrupti temporibus eius quaerat
          </p>
          {/* product cards */}

          <div className="flex flex-col lg:flex-row gap-5 p-8 rounded-lg bg-slate-200 border-4 border-slate-400">
            <ProductCard
              onClick={() => {
                setPageNumber(2);
              }}
              title={"Plantation Shutters"}
              description={
                "quaerat cupiditate aliquid unde, quam praesentium? Quod laudantium quasi"
              }
              imageURL={
                "https://johnlewis.scene7.com/is/image/JohnLewis/shutters-Shutterly-main-block?resMode=sharp"
              }
            />

            <ProductCard
              onClick={() => {
                setPageNumber(3);
              }}
              title={"Roller Blinds"}
              description={
                "quaerat cupiditate aliquid unde, quam praesentium? Quod laudantium quasi"
              }
              imageURL={
                "https://chronos-stores.com/wp-content/uploads/2019/02/Jet-Black-Roller-Blind.jpg"
              }
            />

            <ProductCard
              onClick={() => {
                setPageNumber(1);
              }}
              title={"Curtains"}
              description={
                "quaerat cupiditate aliquid unde, quam praesentium? Quod laudantium quasi"
              }
              imageURL={
                "https://curtainsdirect2u.co.uk/cdn/shop/products/THERM30G-2.jpg?v=1650018238"
              }
            />
          </div>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-blue-100 dark:text-blue-100">
              <thead className="text-xs text-white uppercase bg-blue-600 border-b border-blue-400 dark:text-white">
                <tr>
                  <th scope="col" className="px-6 py-3 bg-blue-500">
                    Location
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Product Name
                  </th>
                  <th scope="col" className="px-6 py-3 bg-blue-500">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {window_data.map((data) => {
                  return (
                    <tr
                      className="bg-blue-600 border-b border-blue-400"
                      key={data["id"].toString()}
                    >
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium bg-blue-500 text-blue-50 whitespace-nowrap dark:text-blue-100"
                      >
                        {data["location"]}
                      </th>
                      <td className="px-6 py-4">{data["product_name"]}</td>
                      <td className="px-6 py-4 bg-blue-500">{data["price"]}</td>
                      <td className="px-6 py-4">
                        {" "}
                        <button
                          onClick={() => window_data_deleteHandler(data["id"])}
                          className="font-medium text-white hover:underline"
                        >
                          Delete
                        </button>
                      </td>
                      <td className="px-6 py-4 bg-blue-500">
                        <button
                          onClick={() => window_data_editHandler(data["id"])}
                          className="font-medium text-white hover:underline"
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      );
  }
}
