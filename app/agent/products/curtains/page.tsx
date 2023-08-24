"use client";

import DropdownNormal from "@components/DropDowns/DropdownNormal";
import LableTextField from "@components/TextFeilds/LableTextField";
import { SelectChangeEvent, Typography } from "@mui/material";
import React from "react";
import TextArea from "@components/TextFeilds/TextArea";
import { Curtains_data } from "@constants/Curtains_data";
import CustomIconButton from "@components/Buttons/CustomIconButton";
import {
  ControlPointRounded,
  FastForward,
  Save,
  Summarize,
} from "@mui/icons-material";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

//creaete the type for the form data
type CurtainFormData = {
  Location: string;
  width: number;
  Height: number;
  Category: string;
  Fabric: string;
  Curtain_Type: string;
  Color: string;
  Control: string;
  Track_Color: string;
  Return: string;
  Bottom_Hem: string;
  bracket_type: string;
  linting: string;
  price_per_meter: number;
  commments: string;
};

export default function page() {
  //form validation using zod
  // const schema  = z.object({

  //   Location: z.string().nonempty({ message: "Location is required" }),
  //   width: z.number().positive({ message: "Width is required" }),
  //   Height: z.number().positive({ message: "Height is required" }),
  //   Category: z.string().nonempty({ message: "Category is required" }),

  // )};

  return (
    <div className=" ">
      <section className="lg:px-32 md:px-32 p-4">
        <Typography className="text-3xl font-semibold">Curtains</Typography>
        <p className="opacity-50">
          Dorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
          fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus
          elit sed risus. Maecenas eget condimentum velit, sit amet feugiat
          lectus. Class aptent taciti sociosqu ad litora torquent perlvinar.
          Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna.
          Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet
          lacinia. Aliquam in elementum tellus.
        </p>
      </section>
      <div className=" lg:mx-36 md:mx-10 p-5flex flex-col gap-4  bg-slate-200 border-4 border-slate-400 my-5 p-10 rounded-lg">
        <LableTextField
          name={"Location"}
          id={"Location"}
          label={"Add the Location details of the window"}
          type={"text"}
          placeholder="Bed Room.."
        />

        <section>
          <Typography className="border-b-2 border-blue-500 text-blue-600 mt-5">
            Add the details about the window dimension
          </Typography>
          <div className="flex gap-16 items-center mt-2">
            <LableTextField
              name={"width"}
              id={"width"}
              label={"Width(mm)"}
              type={"text"}
              placeholder="1200.."
            />
            <LableTextField
              name={"Height"}
              id={"Height"}
              label={"Height"}
              type={"text"}
              placeholder="1200.."
            />
          </div>
        </section>
        <section className=" flex flex-col gap-4">
          <hr className=" border--2 border-blue-500 mt-6" />
          <div className="flex flex-col sm:flex-row gap-10">
            <div className="flex flex-col w-full sm:w-2/4 gap-3 mt-2">
              <DropdownNormal
                label={"Category"}
                id={"Category"}
                value={"Category"}
                name={"Category"}
                options={Curtains_data.Category}
                onChange={(event: SelectChangeEvent) => {}}
                index={0}
                data={""}
              />

              <LableTextField
                name={"Fabric "}
                id={"Fabric"}
                label={"Fabric"}
                type={"text"}
                placeholder="Cotton.."
              />
            </div>
            <div className="flex flex-col w-full sm:w-2/4 gap-3 mt-2">
              <DropdownNormal
                label={"Curtain Type"}
                id={"Curtain_Type"}
                value={"Curtain_Type"}
                name={"Curtain_Type"}
                options={Curtains_data.Curtain_type}
                onChange={(event: SelectChangeEvent) => {}}
                index={0}
                data={""}
              />
              <LableTextField
                name={"Color"}
                id={"Color"}
                label={"Color"}
                type={"text"}
                placeholder="Green.."
              />
            </div>
          </div>
          <hr className=" border-b-2 border-blue-500 mb-6" />
          <div className="flex flex-col sm:flex-row gap-10">
            <div className="flex flex-col w-full sm:w-2/4 gap-3 mt-2">
              <DropdownNormal
                label={"Control"}
                id={"Control"}
                value={"Control"}
                name={"Control"}
                options={Curtains_data.Control}
                onChange={(event: SelectChangeEvent) => {}}
                index={0}
                data={""}
              />
              <DropdownNormal
                label={"Track Color"}
                id={"Track_Color"}
                value={"Track_Color"}
                name={"Track_Color"}
                options={Curtains_data.Track_Color}
                onChange={(event: SelectChangeEvent) => {}}
                index={0}
                data={""}
              />
            </div>
            <div className="flex flex-col w-full sm:w-2/4 gap-3 mt-2">
              <DropdownNormal
                label={"Return"}
                id={"Return"}
                value={"Return"}
                name={"Return"}
                options={Curtains_data.Return}
                onChange={(event: SelectChangeEvent) => {}}
                index={0}
                data={""}
              />
              <DropdownNormal
                label={"Bottom Hem"}
                id={"Bottom_Hem"}
                value={"Bottom_Hem"}
                name={"Bottom_Hem"}
                options={Curtains_data.Bottom_Hem}
                onChange={(event: SelectChangeEvent) => {}}
                index={0}
                data={""}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-10">
            <div className="flex flex-col w-full sm:w-2/4 gap-3 mt-2">
              <DropdownNormal
                label={"Bracket Type"}
                id={"Bracket_Type"}
                value={"Bracket_Type"}
                name={"Bracket_Type"}
                options={Curtains_data.Bracket_Type}
                onChange={(event: SelectChangeEvent) => {}}
                index={0}
                data={""}
              />
            </div>
            <div className="flex flex-col w-full sm:w-2/4 gap-3 mt-2">
              <DropdownNormal
                label={"Lining"}
                id={"Lining"}
                value={"Lining"}
                name={"Lining"}
                options={Curtains_data.Linig}
                onChange={(event: SelectChangeEvent) => {}}
                index={0}
                data={""}
              />
            </div>
          </div>

          <LableTextField
            name={"Price_Per_Meter"}
            id={"Price_Per_Meter"}
            label={"Price Per Meter"}
            type={"number"}
            placeholder="1200.."
          />
        </section>

        <section className="border-t-2 my-10 border-blue-500">
          <div className=" mt-4">
            <TextArea
              name={"comments"}
              id={"comments"}
              label={"Please add any comments or remarks "}
              placeholder={"comments and remarks.."}
              type={"text"}
            />
          </div>
        </section>
        <div className=" text-right mb-3">
          <CustomIconButton
            onClick={() => {}}
            size="small"
            startIcon={<Save />}
            backgroundColor="#0066FF"
            iconColor="white"
            textColor="white"
          >
            Save Window
          </CustomIconButton>
        </div>

        <hr className=" border-b-2 border-blue-500 mt-6" />

        <Typography>Add extra materials for this window.</Typography>

        {/* add new product in the same window */}
        <div className=" flex flex-col w-full sm:w-2/4 gap-3 mt-2">
          <CustomIconButton
            onClick={() => {}}
            size="small"
            startIcon={<ControlPointRounded />}
            backgroundColor="#48D89B"
            iconColor="black"
            textColor="black"
          >
            Plantation Shutters
          </CustomIconButton>
          <CustomIconButton
            onClick={() => {}}
            size="small"
            startIcon={<ControlPointRounded />}
            backgroundColor="#88D6F7"
            iconColor="black"
            textColor="black"
          >
            Roller Blinds
          </CustomIconButton>
          <CustomIconButton
            onClick={() => {}}
            size="small"
            startIcon={<ControlPointRounded />}
            backgroundColor="#FE8514"
            iconColor="black"
            textColor="black"
          >
            Curtains
          </CustomIconButton>
        </div>
      </div>
      <div className="p-4 sm:p-10 flex flex-col gap-4 my-5 rounded-lg">
        <hr className="border-b-2 border-blue-500 mb-6" />

        <Typography>Add a new window Data</Typography>
        {/* add new product in the new window */}

        <div className="flex flex-wrap   gap-3 mt-2 ">
          <CustomIconButton
            onClick={() => {}}
            size="small"
            startIcon={<ControlPointRounded />}
            backgroundColor="#48D89B"
            iconColor="black"
            textColor="black"
          >
            Plantation Shutters
          </CustomIconButton>
          <CustomIconButton
            onClick={() => {}}
            size="small"
            startIcon={<ControlPointRounded />}
            backgroundColor="#88D6F7"
            iconColor="black"
            textColor="black"
          >
            Roller Blinds
          </CustomIconButton>
          <CustomIconButton
            onClick={() => {}}
            size="small"
            startIcon={<ControlPointRounded />}
            backgroundColor="#FE8514"
            iconColor="black"
            textColor="black"
          >
            Curtains
          </CustomIconButton>
        </div>
        <hr className="border-b-2 border-blue-500 mb-6" />

        <div className="text-center md:text-right">
          <Typography className="mb-2">See The Summary</Typography>
          <CustomIconButton
            onClick={() => {}}
            size="small"
            startIcon={<Summarize />}
            backgroundColor="#0066FF"
            iconColor="white"
            textColor="white"
          >
            Summary
          </CustomIconButton>
        </div>
      </div>
      {/* continue to the next window */}
      <div className="bg-slate-800 min-w-full text-white p-5 flex flex-col gap-4">
        <Typography>
          Press continue if you added all the window details
        </Typography>

        <CustomIconButton
          onClick={() => {}}
          size="small"
          startIcon={<FastForward />}
          backgroundColor="#0066FF"
          iconColor="white"
          textColor="white"
        >
          Continue
        </CustomIconButton>
      </div>
    </div>
  );
}
