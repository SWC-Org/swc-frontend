import SelectionCard from "@components/admin/SelectionCard";
import React from "react";

export default function page() {
  return (
    <div className=" flex flex-col items-center h-screen px-4">
      <div className=" opacity-50">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut doloremque
        exercitationem, magnam tempore architecto facere magni itaque odio
        perferendis mollitia, at nisi sapiente vitae maxime culpa, eos optio
        numquam dolores?
      </div>
      <div className="w-full mt-5 flex flex-col gap-5 items-center justify-center">
        <SelectionCard />
        <SelectionCard />
        <SelectionCard />
      </div>
    </div>
  );
}
