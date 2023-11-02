  "use client";

  import ProductCard from "@components/cards/ProductCard";
  import CurtainComponent from "@components/agent/products/CurtainComponent";
  import PlantationShutterComponent from "@components/agent/products/Plantation-ShuttersComponent";
  import RollerBlinderComponent from "@components/agent/products/Roller-blindsComponent";
  import React, { useState } from "react";
  import { useAppSelector } from "../../redux/store";

  export default function ProductComponent({
    window_data,
    window_data_deleteHandler,
    window_data_editHandler,
  }) {
    const [pageNumber, setPageNumber] = useState(0);

    const cancelFunc = () => {
      setPageNumber(0);
    };

    const windowData = useAppSelector((state) => state.windowDataReducer);

    const fw = Array.isArray(windowData) ? windowData : [];
    console.log(fw);

    switch (pageNumber) {
      case 1:
        return <CurtainComponent cancelFunc={cancelFunc} data={{}} />;
      case 2:
        return <PlantationShutterComponent cancelFunc={cancelFunc} data={{}} />;
      case 3:
        return <RollerBlinderComponent cancelFunc={cancelFunc} data={{}} />;
      default:
        return (
          <div className="flex flex-col gap-4 items-center justify-center p-10">
            <h1 className="text-3xl font-bold">Select one Product and Continue</h1>
            <p className="text-center">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
              ipsum voluptates est voluptas? Quia ipsam ipsum quo corrupti
              temporibus eius quaerat cupiditate aliquid unde, quam praesentium?
              Quod laudantium quasi vel! Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Labore ipsum voluptates est voluptas? Quia ipsam
              ipsum quo corrupti temporibus eius quaerat
            </p>
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

            <div >
              {fw.map((window) => (
                <div key={window.windowId} className=" bg-slate-500 m-8">
                  <h2>Window ID: {window.windowId}</h2>
                  {window.plantationShutter && (
                    <div>
                      <h3>Plantation Shutter Data:</h3>
                      <p>Location: {window.plantationShutter.Location}</p>
                      {/* Render other plantation shutter properties here */}
                    </div>
                  )}
                  {window.curtain && (
                    <div>
                      <h3>Curtain Data:</h3>
                      <p>Location: {window.curtain.Location}</p>
                      {/* Render other curtain properties here */}
                    </div>
                  )}
                  {window.rollerBlind && (
                    <div>
                      <h3>Roller Blind Data:</h3>
                      <p>Location: {window.rollerBlind.Location}</p>
                      {/* Render other roller blind properties here */}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          
        );
    }
  }
