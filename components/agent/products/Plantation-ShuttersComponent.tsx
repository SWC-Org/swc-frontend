"use client";

import DropdownNormal from "@components/DropDowns/DropdownNormal";
import LableTextField from "@components/TextFeilds/LableTextField";
import { Box, SelectChangeEvent, Typography } from "@mui/material";
import { Plantation_shutters_data } from "@constants/Plantation_shutters_data";

import React, { useState } from "react";
import TextArea from "@components/TextFeilds/TextArea";
import CustomIconButton from "@components/Buttons/CustomIconButton";
import {
  Calculate,
  Cancel,
  ControlPointRounded,
  FastForwardOutlined,
  Save,
  Summarize,
} from "@mui/icons-material";
import { clampDaySectionIfPossible } from "@mui/x-date-pickers/internals/hooks/useField/useField.utils";

interface PlantationShutterProps {
  cancelFunc: () => void;
  data: {
    Location: string;
    width: number;
    Height: number;
    Mount_Configuration: string;
    Panel_Quantity: number;
    Blade_Size: string;
    Material: string;
    Color: string;
    Mid_rails: string;
    Layout_Details: string;
    Mount_methods: string;
    Frames_Configuration: string;
    Frame_Size: number;
    Split_Tilt_Rod: string;
    Tilt_rod_type: string;
    T_Post_Quantity: number;
    Distance_n_to_T1_T2_T3: number;
    Surcharge_Value: number;
    Price_per_square_meter: number;
    comments: string;
    price: number;
  };
}
export default function PlantationShutter({
  cancelFunc,
  data,
}: PlantationShutterProps) {
  function isEmpty(obj: Object) {
    return Object.keys(obj).length === 0;
  }
  const [windowData, setWindowData] = useState(
    isEmpty(data)
      ? {
          Location: "",
          width: 0,
          Height: 0,
          Mount_Configuration: "",
          Panel_Quantity: 0,
          Blade_Size: "",
          Material: "",
          Color: "",
          Mid_rails: "",
          Layout_Details: "",
          Mount_methods: "",
          Frames_Configuration: "",
          Frame_Size: 0,
          Split_Tilt_Rod: "",
          Tilt_rod_type: "",
          T_Post_Quantity: 0,
          Distance_n_to_T1_T2_T3: 0,
          Surcharge_Value: 0,
          Price_per_square_meter: 0,
          comments: "",
          price: 0,
        }
      : data
  );

  const calculatePrice = async () => {
    // develope api fetch in next stage
    let updatedValue = {
      price:
        windowData["width"] *
        windowData["Height"] *
        windowData["Surcharge_Value"],
    };
    setWindowData((wd) => ({
      ...wd,
      ...updatedValue,
    }));
  };

  const updateOnChange = (name: string, value: any) => {
    let updatedValue = { [name]: value };
    setWindowData((wd) => ({
      ...wd,
      ...updatedValue,
    }));
  };

  console.log(windowData);

  return (
    <div className="">
      <section className="lg:px-32 md:px-32 p-4">
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
      <div className=" lg:mx-36 md:mx-10 flex flex-col gap-4  bg-slate-200 border-4 border-slate-400 my-5 p-10 rounded-lg">
        <LableTextField
          name={"Location"}
          id={"Location"}
          label={"Add the Location details of the window"}
          type={"text"}
          placeholder="Bed Room.."
          onChange={(event: SelectChangeEvent) => {
            updateOnChange(event.target.name, event.target.value);
          }}
          value={windowData["Location"]}
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
              type={"number"}
              placeholder="1200.."
              onChange={(event: SelectChangeEvent) => {
                updateOnChange(event.target.name, event.target.value);
              }}
              value={windowData["width"].toString()}
            />
            <LableTextField
              name={"Height"}
              id={"Height"}
              label={"Height"}
              type={"number"}
              placeholder="1200.."
              onChange={(event: SelectChangeEvent) => {
                updateOnChange(event.target.name, event.target.value);
              }}
              value={windowData["Height"].toString()}
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
                name={"Mount_Configuration"}
                options={Plantation_shutters_data.MountConfig}
                onChange={(event: SelectChangeEvent) => {
                  console.log(event);
                  updateOnChange(event.target.name, event.target.value);
                }}
                value={windowData["Mount_Configuration"].toString()}
                index={0}
                data={""}
              />

              <LableTextField
                name={"Panel_Quantity"}
                id={"Panel_Quantity"}
                label={"Panel Quantity"}
                type={"number"}
                placeholder="10.."
                onChange={(event: SelectChangeEvent) => {
                  updateOnChange(event.target.name, event.target.value);
                }}
                value={windowData["Panel_Quantity"].toString()}
              />
            </div>
            <div className="flex flex-col w-full sm:w-2/4 gap-3 mt-2">
              <DropdownNormal
                label={"Blade Size"}
                id={"Blade_Size"}
                name={"Blade_Size"}
                options={Plantation_shutters_data.BladeSize}
                onChange={(event: SelectChangeEvent) => {
                  updateOnChange(event.target.name, event.target.value);
                }}
                value={windowData["Blade_Size"].toString()}
                index={0}
                data={""}
              />
              <DropdownNormal
                label={"Material"}
                id={"Material"}
                name={"Material"}
                options={Plantation_shutters_data.Material}
                onChange={(event: SelectChangeEvent) => {
                  updateOnChange(event.target.name, event.target.value);
                }}
                value={windowData["Material"]}
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
                name={"Color"}
                options={Plantation_shutters_data.Color}
                onChange={(event: SelectChangeEvent) => {
                  updateOnChange(event.target.name, event.target.value);
                }}
                value={windowData["Color"]}
                index={0}
                data={""}
              />
              <LableTextField
                name={"Mid_rails"}
                id={"Mid_rails"}
                label={"Mid rails"}
                type={"text"}
                placeholder="enter here.."
                onChange={(event: SelectChangeEvent) => {
                  updateOnChange(event.target.name, event.target.value);
                }}
                value={windowData["Mid_rails"]}
              />
            </div>
            <div className="flex flex-col w-full sm:w-2/4 gap-3 mt-2">
              <DropdownNormal
                label={"Layout Details"}
                id={"Layout_Details"}
                name={"Layout_Details"}
                options={Plantation_shutters_data.layoutOptions}
                onChange={(event: SelectChangeEvent) => {
                  updateOnChange(event.target.name, event.target.value);
                }}
                value={windowData["Layout_Details"]}
                index={0}
                data={""}
              />
              <DropdownNormal
                label={"Mount methods"}
                id={"Mount_methods"}
                name={"Mount_methods"}
                options={Plantation_shutters_data.mountingMethodOptions}
                onChange={(event: SelectChangeEvent) => {
                  updateOnChange(event.target.name, event.target.value);
                }}
                value={windowData["Mount_methods"]}
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
                name={"Frames_Configuration"}
                options={Plantation_shutters_data.frameConfigOptions}
                onChange={(event: SelectChangeEvent) => {
                  updateOnChange(event.target.name, event.target.value);
                }}
                value={windowData["Frames_Configuration"]}
                index={0}
                data={""}
              />
              <LableTextField
                name={"Frame_Size"}
                id={"Frame_Size"}
                label={"Frame Size"}
                type={"number"}
                placeholder="120.."
                onChange={(event: SelectChangeEvent) => {
                  updateOnChange(event.target.name, event.target.value);
                }}
                value={windowData["Frame_Size"].toString()}
              />
            </div>
            <div className="flex flex-col w-full sm:w-2/4 gap-3 mt-2">
              <DropdownNormal
                label={"Split_Tilt_Rod"}
                id={"Split_Tilt_Rod"}
                name={"Split_Tilt_Rod"}
                options={Plantation_shutters_data.layoutOptions}
                onChange={(event: SelectChangeEvent) => {
                  updateOnChange(event.target.name, event.target.value);
                }}
                value={windowData["Split_Tilt_Rod"]}
                index={0}
                data={""}
              />
              <DropdownNormal
                label={"Tilt rod type"}
                id={"Tilt_rod_type"}
                name={"Tilt_rod_type"}
                options={Plantation_shutters_data.mountingMethodOptions}
                onChange={(event: SelectChangeEvent) => {
                  updateOnChange(event.target.name, event.target.value);
                }}
                value={windowData["Tilt_rod_type"]}
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
                onChange={(event: SelectChangeEvent) => {
                  updateOnChange(event.target.name, event.target.value);
                }}
                value={windowData["T_Post_Quantity"].toString()}
              />
              <LableTextField
                name={"Distance_n_to_T1_T2_T3"}
                id={"Location"}
                label={"Distance_n_to_T1_T2_T3"}
                type={"number"}
                placeholder="enter here.."
                onChange={(event: SelectChangeEvent) => {
                  updateOnChange(event.target.name, event.target.value);
                }}
                value={windowData["Distance_n_to_T1_T2_T3"].toString()}
              />
            </div>
            <div className="flex flex-col w-full sm:w-2/4 gap-3 mt-2">
              <LableTextField
                name={"Surcharge_Value"}
                id={"Surcharge_Value"}
                label={"Surcharge Value"}
                type={"number"}
                placeholder="enter here."
                onChange={(event: SelectChangeEvent) => {
                  updateOnChange(event.target.name, event.target.value);
                }}
                value={windowData["Surcharge_Value"].toString()}
              />
              <LableTextField
                name={"Price_per_square_meter"}
                id={"Price_per_square_meter"}
                label={"Price per square meter "}
                type={"number"}
                placeholder="enter here.."
                onChange={(event: SelectChangeEvent) => {
                  updateOnChange(event.target.name, event.target.value);
                }}
                value={windowData["Price_per_square_meter"].toString()}
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
              onChange={(event: SelectChangeEvent) => {
                updateOnChange(event.target.name, event.target.value);
              }}
              value={windowData["comments"]}
            />
          </div>
        </section>
        <div className=" text-right mb-3">
          <Box component="div" sx={{ visibility: "visible" }}>
            Price ${windowData["price"]}
          </Box>
        </div>
        <div className=" text-right mb-3">
          <CustomIconButton
            onClick={calculatePrice}
            size="small"
            startIcon={<Calculate />}
            backgroundColor="#FFA500"
            iconColor="white"
            textColor="white"
          >
            Calculate Price
          </CustomIconButton>
        </div>
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

        <div className=" text-right mb-3">
          <CustomIconButton
            onClick={cancelFunc}
            size="small"
            startIcon={<Cancel />}
            backgroundColor="#eb2344"
            iconColor="white"
            textColor="white"
          >
            Cancel
          </CustomIconButton>
        </div>

        <hr className=" border-b-2 border-blue-500 mb-6" />
      </div>
    </div>
  );
}
