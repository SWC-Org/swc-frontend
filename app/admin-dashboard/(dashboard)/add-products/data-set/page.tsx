"use client";

import SelectionCard from "@components/admin/SelectionCard";
import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function Page() {
  //number of sections

  const [numberOfSections, setNumberOfSections] = React.useState<number>(1);

  //add new section
  const handleAddSection = () => {
    setNumberOfSections(numberOfSections + 1);
  };

  return (
    <div className=" flex flex-col w-full  p-5  h-screen px-4 bg-slate-300">
      <h2 className="font-bold text-xl ">
        Add the data set for <span className=" text-blue-600">Roof Covers</span>
      </h2>
      <div className=" opacity-50">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut doloremque
        exercitationem, magnam tempore architecto facere magni itaque odio
        perferendis mollitia, at nisi sapiente vitae maxime culpa, eos optio
        numquam dolores?
      </div>
      <div className="w-full mt-5 flex flex-col gap-5 items-center justify-center">
        {Array.from({ length: numberOfSections }).map((_, index) => (
          <SelectionCard key={index} />
        ))}
      </div>

      <div className=" flex justify-end mt-5">
        <button
          onClick={handleAddSection}
          className="bg-blue-600 text-white px-4  py-2 rounded hover:bg-blue-700"
        >
          Add New Data{" "}
          <span>
            <AddCircleIcon />
          </span>
        </button>
      </div>
    </div>
  );
}
