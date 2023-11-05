"use client";

import ProductCard from "@components/cards/ProductCard";
import CurtainComponent from "@components/agent/products/CurtainComponent";
import PlantationShutterComponent from "@components/agent/products/Plantation-ShuttersComponent";
import RollerBlinderComponent from "@components/agent/products/Roller-blindsComponent";
import React, { useState } from "react";
import { useAppSelector, AppDispatch, store } from "../../redux/store";
import {
  removeCurtainData,
  removeRollerBlindData,
  removePlantationShutterData,
} from "../../redux/slices/windowDataSlice";
import { useDispatch } from "react-redux";

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

  console.log(windowData, "windowData");

  //redux
  const dispatch = useDispatch();
  const [currentWindowId, setCurrentWindowId] = useState(0);
  console.log(currentWindowId, "currentWindowId");

  //add
  const addWindowHandler = () => {
    const newWindowId = windowData.length;
    setCurrentWindowId(newWindowId);
    console.log(newWindowId, "newWindowId");
    // const newWindow = {
    //   windowId: newWindowId,
    // };
    // dispatch(addWindow(newWindow));
    console.log("addWindowHandler");
  };

  //remove plantation shutter data from selected window

  // const removeThisPlantationShutter = () => {
  //   dispatch(removePlantationShutterData(deleteId));
  // };

  switch (pageNumber) {
    case 1:
      return (
        <CurtainComponent
          cancelFunc={cancelFunc}
          data={{}}
          windowId={currentWindowId}
        />
      );
    case 2:
      return (
        <PlantationShutterComponent
          cancelFunc={cancelFunc}
          data={{}}
          windowId={currentWindowId}
        />
      );
    case 3:
      return (
        <RollerBlinderComponent
          cancelFunc={cancelFunc}
          data={{}}
          windowId={currentWindowId}
        />
      );
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

          <div className=" w-full mt-8 ">
            <div className=" py-10">
              <p className=" font-bold text-xl">Window data summary</p>
              <button
                onClick={addWindowHandler}
                className=" bg-blue-500 px-5 py-2 hover:bg-blue-700 ease-in-out rounded-md"
              >
                Add new window
              </button>
            </div>

            <div className=" bg-slate-200 p-5">
              {windowData &&
                windowData.map((window) => (
                  <div key={window.windowId} className=" border border-t-2">
                    <h2>Window ID: {window.windowId}</h2>

                    <div className=" flex  gap-5  ">
                      {window.plantationShutter && (
                        <div className=" bg-emerald-400 p-5">
                          <h3>Plantation Shutter Data:</h3>
                          <p>Location: {window.plantationShutter.Location}</p>
                          <button
                            className=" bg-red-600"
                            onClick={() =>
                              dispatch(
                                removePlantationShutterData(window.windowId)
                              )
                            }
                          >
                            remove
                          </button>
                          {/* Render other plantation shutter properties here */}
                        </div>
                      )}
                      {window.curtain && (
                        <div className="bg-blue-400 p-5 ">
                          <h3>Curtain Data:</h3>
                          <p>Location: {window.curtain.Location}</p>
                          <button
                            className=" bg-red-600"
                            onClick={() =>
                              dispatch(removeCurtainData(window.windowId))
                            }
                          >
                            remove
                          </button>
                          {/* Render other curtain properties here */}
                        </div>
                      )}
                      {window.rollerBlind && (
                        <div className="bg-yellow-400 p-5">
                          <h3>Roller Blind Data:</h3>
                          <p>Location: {window.rollerBlind.Location}</p>
                          <button
                            className=" bg-red-600"
                            onClick={() =>
                              dispatch(removeRollerBlindData(window.windowId))
                            }
                          >
                            remove
                          </button>
                          {/* Render other roller blind properties here */}
                        </div>
                      )}
                    </div>

                    <div className=" flex gap-5">
                      <button className=" bg-blue-500 px-5 py-2 hover:bg-blue-700 ease-in-out rounded-md mt-2">
                        Add to this window
                      </button>
                      <button className=" bg-red-500 px-5 py-2 hover:bg-red-700 ease-in-out rounded-md mt-2">
                        remove this window
                      </button>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      );
  }
}
