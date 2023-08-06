"use client";

import DropdownNormal from "@components/DropDowns/DropdownNormal";
import LableTextField from "@components/TextFeilds/LableTextField";

import React from "react";
import TextArea from "@components/TextFeilds/TextArea";

import { Roller_blinds_data } from "@constants/Roller_blinds_data";
import {
  Save,
  Summarize,
  Add,
  ControlPointRounded,
  FastForwardOutlined,
} from "@mui/icons-material";
import CustomIconButton from "@components/Buttons/CustomIconButton";
import { SelectChangeEvent, Typography } from "@mui/material";

export default function page() {
  return (
    <div className="">
      <section className=" lg:px-32 md:px-32 p-4">
        <Typography className="text-3xl font-semibold ">
          Roller Blinds
        </Typography>
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
      <div className="lg:mx-36 md:mx-10  flex flex-col gap-4  bg-slate-200 my-5 p-10 rounded-lg">
        <LableTextField
          name={"Location"}
          id={"Location"}
          label={"Add the Location details of the window"}
          type={"text"}
          placeholder="Bed Room.."
        />

        <section>
          <Typography className="border-b-2 border-blue-500 text-blue-600">
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
          <hr className=" border-b-2 border-blue-500 mb-6" />

          <div className="flex flex-col sm:flex-row gap-10">
            <div className="flex flex-col w-full sm:w-2/4 gap-3 mt-2">
              <LableTextField
                name={"Fabric"}
                id={"Fabric"}
                label={"Fabric"}
                type={"text"}
                placeholder="Cotton.."
              />

              <LableTextField
                name={"Color"}
                id={"Color"}
                label={"Color"}
                type={"text"}
                placeholder="Green.."
              />
            </div>
            <div className="flex flex-col w-full sm:w-2/4 gap-3 mt-2">
              <DropdownNormal
                label={"Category"}
                id={"Category"}
                value={"Category"}
                name={"Category"}
                options={Roller_blinds_data.Category}
                onChange={(event: SelectChangeEvent) => {}}
                index={0}
                data={""}
              />
            </div>
          </div>

          <hr className=" border-b-2 border-blue-500 mb-6" />

          <div className="flex flex-col sm:flex-row gap-10">
            <div className="flex flex-col w-full sm:w-2/4 gap-3 mt-2">
              <DropdownNormal
                label={"Control Side"}
                id={"Control_Side"}
                value={"Control_Side"}
                name={"Control_Side"}
                options={Roller_blinds_data.Control_Side}
                onChange={(event: SelectChangeEvent) => {}}
                index={0}
                data={""}
              />
              <DropdownNormal
                label={"Chanin Type"}
                id={"Chanin_Type"}
                value={"Chanin_Type"}
                name={"Chanin_Type"}
                options={Roller_blinds_data.Chain_Type}
                onChange={(event: SelectChangeEvent) => {}}
                index={0}
                data={""}
              />
            </div>
            <div className="flex flex-col w-full sm:w-2/4 gap-3 mt-2">
              <DropdownNormal
                label={"Chain Drop"}
                id={"Chain_Drop"}
                value={"Chain_Drop"}
                name={"Chain_Drop"}
                options={Roller_blinds_data.Chain_Drop}
                onChange={(event: SelectChangeEvent) => {}}
                index={0}
                data={""}
              />
              <DropdownNormal
                label={"Chain Color"}
                id={"Chain_Color"}
                value={"Chain_Color"}
                name={"Chain_Color"}
                options={Roller_blinds_data.Bottom_Color}
                onChange={(event: SelectChangeEvent) => {}}
                index={0}
                data={""}
              />
            </div>
          </div>

          <hr className=" border-b-2 border-blue-500 mb-6" />

          <div className="flex flex-col sm:flex-row gap-10">
            <div className="flex flex-col w-full sm:w-2/4 gap-3 mt-2">
              <DropdownNormal
                label={"Bottom Rail"}
                id={"Bottom_Rail"}
                value={"Bottom_Rail"}
                name={"Bottom_Rail"}
                options={Roller_blinds_data.Bottom_Rail}
                onChange={(event: SelectChangeEvent) => {}}
                index={0}
                data={""}
              />
              <DropdownNormal
                label={"Roll Drop"}
                id={"Roll_Drop"}
                value={"Roll_Drop"}
                name={"Roll_Drop"}
                options={Roller_blinds_data.Roll}
                onChange={(event: SelectChangeEvent) => {}}
                index={0}
                data={""}
              />
            </div>
            <div className="flex flex-col w-full sm:w-2/4 gap-3 mt-2">
              <DropdownNormal
                label={"Bottom Color Drop"}
                id={"Bottom_Color_Drop"}
                value={"Bottom_Color_Drop"}
                name={"Bottom_Color_Drop"}
                options={Roller_blinds_data.Bottom_Color}
                onChange={(event: SelectChangeEvent) => {}}
                index={0}
                data={""}
              />
              <DropdownNormal
                label={"Winder Color"}
                id={"Winder_Color"}
                value={"Winder_Color"}
                name={"Winder_Color"}
                options={Roller_blinds_data.Winder_Color}
                onChange={(event: SelectChangeEvent) => {}}
                index={0}
                data={""}
              />
            </div>
          </div>
        </section>

        <section className="border-t-2 mb-10 border-blue-500">
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
        <div className=" text-right">
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

        <hr className=" border-b-2 border-blue-500 mb-6" />

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
          startIcon={<FastForwardOutlined />}
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
