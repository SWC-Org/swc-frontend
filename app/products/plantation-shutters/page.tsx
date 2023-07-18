"use client";

import DropdownNormal from "@components/DropDowns/DropdownNormal";
import LableTextField from "@components/TextFeilds/LableTextField";
import { SelectChangeEvent, Typography } from "@mui/material";
import { Plantation_shutters_data } from "@constants/Plantation_shutters_data";

import React from "react";
import TextArea from "@components/TextFeilds/TextArea";

export default function page() {
  return (
    <div className=" lg:mx-36 md:mx-10 p-5">
      <section className=" ">
        <Typography className="text-3xl font-semibold">
          Plantation Shutters
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
      <div className="flex flex-col gap-4  bg-slate-200 my-5 p-10 rounded-lg">
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
              <DropdownNormal
                label={"Mount Configuration"}
                id={"Mount_Configuration"}
                value={"Mount_Configuration"}
                name={"Mount_Configuration"}
                options={Plantation_shutters_data.MountConfig}
                onChange={(event: SelectChangeEvent) => {}}
                index={0}
                data={""}
              />

              <LableTextField
                name={"Panel_Quantity"}
                id={"Panel_Quantity"}
                label={"Panel Quantity"}
                type={"number"}
                placeholder="10.."
              />
            </div>
            <div className="flex flex-col w-full sm:w-2/4 gap-3 mt-2">
              <DropdownNormal
                label={"Blade Size"}
                id={"Blade_Size"}
                value={"Blade_Size"}
                name={"Blade_Size"}
                options={Plantation_shutters_data.BladeSize}
                onChange={(event: SelectChangeEvent) => {}}
                index={0}
                data={""}
              />
              <DropdownNormal
                label={"Material"}
                id={"Material"}
                value={"Material"}
                name={"Material"}
                options={Plantation_shutters_data.Material}
                onChange={(event: SelectChangeEvent) => {}}
                index={0}
                data={""}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-10">
            <div className="flex flex-col w-full sm:w-2/4 gap-3 mt-2">
              <DropdownNormal
                label={"Color"}
                id={"Color"}
                value={"Color"}
                name={"Color"}
                options={Plantation_shutters_data.Color}
                onChange={(event: SelectChangeEvent) => {}}
                index={0}
                data={""}
              />
              <LableTextField
                name={"Mid_rails"}
                id={"Mid_rails"}
                label={"Mid rails"}
                type={"text"}
                placeholder="enter here.."
              />
            </div>
            <div className="flex flex-col w-full sm:w-2/4 gap-3 mt-2">
              <DropdownNormal
                label={"Layout Details"}
                id={"Layout_Details"}
                value={"Layout_Details"}
                name={"Layout_Details"}
                options={Plantation_shutters_data.layoutOptions}
                onChange={(event: SelectChangeEvent) => {}}
                index={0}
                data={""}
              />
              <DropdownNormal
                label={"Mount methods"}
                id={"Mount_methods"}
                value={"Mount_methods"}
                name={"Mount_methods"}
                options={Plantation_shutters_data.mountingMethodOptions}
                onChange={(event: SelectChangeEvent) => {}}
                index={0}
                data={""}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-10">
            <div className="flex flex-col w-full sm:w-2/4 gap-3 mt-2">
              <DropdownNormal
                label={"Frames Configuration"}
                id={"Frames_Configuration"}
                value={"Frames_Configuration"}
                name={"Frames_Configuration"}
                options={Plantation_shutters_data.frameConfigOptions}
                onChange={(event: SelectChangeEvent) => {}}
                index={0}
                data={""}
              />
              <LableTextField
                name={"Frame_Size"}
                id={"Frame_Size"}
                label={"Frame Size"}
                type={"number"}
                placeholder="120.."
              />
            </div>
            <div className="flex flex-col w-full sm:w-2/4 gap-3 mt-2">
              <DropdownNormal
                label={"Split_Tilt_Rod"}
                id={"Split_Tilt_Rod"}
                value={"Split_Tilt_Rod"}
                name={"Split_Tilt_Rod"}
                options={Plantation_shutters_data.layoutOptions}
                onChange={(event: SelectChangeEvent) => {}}
                index={0}
                data={""}
              />
              <DropdownNormal
                label={"Tilt rod type"}
                id={"Tilt_rod_type"}
                value={"Tilt_rod_type"}
                name={"Tilt_rod_type"}
                options={Plantation_shutters_data.mountingMethodOptions}
                onChange={(event: SelectChangeEvent) => {}}
                index={0}
                data={""}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-10">
            <div className="flex flex-col w-full sm:w-2/4 gap-3 mt-2">
              <LableTextField
                name={"T_Post_Quantity"}
                id={"T_Post_Quantity"}
                label={"T Post Quantity"}
                type={"number"}
                placeholder="enter here."
              />
              <LableTextField
                name={"Distance-n to T1/T2/T3"}
                id={"Location"}
                label={"Distance to T1/T2/T3"}
                type={"number"}
                placeholder="enter here.."
              />
            </div>
            <div className="flex flex-col w-full sm:w-2/4 gap-3 mt-2">
              <LableTextField
                name={"Surcharge_Value"}
                id={"Surcharge_Value"}
                label={"Surcharge Value"}
                type={"number"}
                placeholder="enter here."
              />
              <LableTextField
                name={"Price_per_square_meter "}
                id={"Price_per_square_meter"}
                label={"Price per square meter "}
                type={"number"}
                placeholder="enter here.."
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
      </div>
    </div>
  );
}
