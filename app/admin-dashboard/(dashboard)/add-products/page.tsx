"use client";

import CustomIconButton from "@components/Buttons/CustomIconButton";
import LableTextField from "@components/TextFeilds/LableTextField";
import TextArea from "@components/TextFeilds/TextArea";
import { Button, Card, Chip } from "@mui/material";
import React from "react";

export default function page() {
  return (
    <div className=" bg-slate-50 py-2 px-1 flex flex-col gap-5 overflow-scroll ">
      {/* prosuct name and description section */}
      <div className=" w-full bg-slate-300 flex flex-col p-5  rounded-md">
        <h2 className=" font-bold text-2xl">
          Add Product Name and Description
        </h2>
        <form>
          <LableTextField
            id="ProductName"
            label="Product Name"
            name="ProductName"
            placeholder="Enter Product Name"
            type="text"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            width="100%"
          />
          <TextArea
            id="ProductDescription"
            label="Product Description"
            name="ProductDescription"
            placeholder="Enter Product Description"
            type="text"
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {}}
            width="100%"
          />
        </form>
      </div>

      {/*Product data section  */}
      <div className=" w-full bg-slate-300 flex flex-col p-5  rounded-md">
        <h2 className=" font-bold text-2xl">Add the Product Data Set</h2>
        <p className=" opacity-50">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
          eveniet asperiores laborum maiores a! Tempore, rem cumque?
          Perspiciatis debitis perferendis distinctio, iste autem ipsam quae
          assumenda doloribus expedita eius ipsum
        </p>
        <hr className=" bg-slate-400 w-full h-1 rounded-md mt-5" />

        <div className="mt-3">
          <CustomIconButton
            onClick={() => {}}
            color="primary"
            backgroundColor="#48D89B"
            textColor="#000"
          >
            Add Data Set
          </CustomIconButton>
        </div>
      </div>

      {/*Price calculation */}
      <div className=" w-full bg-slate-300 flex flex-col p-5  rounded-md">
        <h2 className=" font-bold text-2xl">Price Calculation</h2>
        <p className=" opacity-80 font-semibold">Current price Equation</p>
        <hr className=" bg-slate-400 w-full h-1 rounded-md mt-1" />

        <div className=" flex flow-row mt-5 items-center ">
          <h2>Price:</h2>
          <div className="flex flex-row mx-6 gap-1">
            {/* //TODO:this must be updated with the price calculation */}
            <Chip label="Width(m)" onClick={() => {}} />
            <p>*</p>
            <Chip label="Width(m)" onClick={() => {}} />
            <p>*</p>
            <Chip label="Width(m)" onClick={() => {}} />
          </div>
        </div>

        <hr className=" bg-slate-400 w-full h-1 rounded-md mt-5" />
        <div className="mt-3">
          <CustomIconButton
            onClick={() => {}}
            color="primary"
            backgroundColor="#48D89B"
            textColor="#000"
          >
            Edit Price Equation
          </CustomIconButton>
        </div>
      </div>
      <div className=" w-full bg-slate-300 flex flex-col p-5  rounded-md">
        <h2 className=" font-bold text-2xl">Change GST% </h2>
        <div className="flex flow-row gap-5 mt-5">
          <p className="text-lg font-bold">Current GST:</p>
          <p className="text-lg font-bold text-blue-600">18%</p>
        </div>
        <hr className=" bg-slate-400 w-full h-1 rounded-md mt-5" />
        <div className="mt-3">
          <CustomIconButton
            onClick={() => {}}
            color="primary"
            backgroundColor="#48D89B"
            textColor="#000"
          >
            Edit GST
          </CustomIconButton>
        </div>
      </div>
    </div>
  );
}
