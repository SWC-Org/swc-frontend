"use client";

import SelectionCard from "@components/admin/SelectionCard";
import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function Page() {
  // Number of sections
  const [numberOfSections, setNumberOfSections] = React.useState<number>(1);

  // Data for each section
  const [sectionData, setSectionData] = React.useState<
    { input: string; selectedOption: string }[]
  >([
    {
      input: "",
      selectedOption: "",
    },
  ]);

  console.log(sectionData);
  // Add new section
  const handleAddSection = () => {
    setNumberOfSections(numberOfSections + 1);
    setSectionData([...sectionData, { input: "", selectedOption: "" }]);
  };

  // Update section data when a field in SelectionCard changes
  const updateSectionData = (
    index: number,
    newData: { input: string; selectedOption: string }
  ) => {
    const updatedData = [...sectionData];
    updatedData[index] = newData;
    setSectionData(updatedData);
  };

  return (
    <div className="flex flex-col w-full p-5 h-screen px-4 bg-slate-300">
      <h2 className="font-bold text-xl">
        Add the data set for <span className="text-blue-600">Roof Covers</span>
      </h2>
      <div className="w-full mt-5 flex flex-col gap-5 items-center justify-center">
        {Array.from({ length: numberOfSections }).map((_, index) => (
          <SelectionCard
            key={index}
            index={index}
            sectionData={sectionData[index]}
            updateSectionData={updateSectionData}
          />
        ))}
      </div>
      <div className="flex justify-end mt-5">
        <button
          onClick={handleAddSection}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add New Data
          <span>
            <AddCircleIcon />
          </span>
        </button>
      </div>
    </div>
  );
}
