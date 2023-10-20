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

interface PlantationShutterProps{
  cancelFunc :() => void
  data: Object;
}
export default function PlantationShutter({cancelFunc,data}:PlantationShutterProps) {
  function isEmpty(obj: Object) {
    return Object.keys(obj).length === 0;
  }
  const [windowData, setWindowData] = useState(
    isEmpty(data)
      ? {
          Location: "",
          width : 0,
          Height :0,
          Mount_Configuration : "",
          Panel_Quantity : 0,
          Blade_Size : "",
          Material : "",
          Color :"",
          Mid_rails :"",
          Layout_Details : "",
          Mount_methods : "",
          Frames_Configuration : "",
          Frame_Size : 0,
          Split_Tilt_Rod : "",
          Tilt_rod_type : "",
          T_Post_Quantity : 0,
          Distance_n_to_T1_T2_T3 : 0,
          Surcharge_Value : 0,
          Price_per_square_meter : 0,
          comments : "",
          price : 0
        }
      : data
  );

  const calculatePrice = async () =>{
    // develope api fetch in next stage
    let updatedValue = { price: windowData["width"]*windowData["Height"]*windowData["Surcharge_Value"] };
    setWindowData((wd) => ({
      ...wd,
      ...updatedValue,
    }));

  }

  const updateOnChange = (name: string, value: any) => {
    let updatedValue = { [name]: value };
    setWindowData((wd) => ({
      ...wd,
      ...updatedValue,
    }));
  };
  
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
          value={
            windowData["Location"]
          }
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
              value={
                windowData["width"]
              }
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
              value={
                windowData["Height"]
              }
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
                  updateOnChange(event.target.name, event.target.value);
                }}
                value={
                  windowData["Mount Configuration"]
                }
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
                value={
                  windowData["Panel_Quantity"]
                }
              />
            </div>
            <div className="flex flex-col w-full sm:w-2/4 gap-3 mt-2">
              <DropdownNormal
                label={"Blade Size"}
                id={"Blade_Size"}
                value={"Blade_Size"}
                name={"Blade_Size"}
                options={Plantation_shutters_data.BladeSize}
                onChange={(event: SelectChangeEvent) => {
                  updateOnChange(event.target.name, event.target.value);
                }}
                value={
                  windowData["Blade_Size"]
                }
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
                value={
                  windowData["Material"]
                }
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
                onChange={(event: SelectChangeEvent) => {
                  updateOnChange(event.target.name, event.target.value);
                }}
                value={
                  windowData["Color"]
                }
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
                value={
                  windowData["Mid_rails"]
                }
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
                value={
                  windowData["Layout_Details"]
                }
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
                value={
                  windowData["Mount_methods"]
                }
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
                value={
                  windowData["Frames_Configuration"]
                }
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
                value={
                  windowData["Frame_Size"]
                }
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
                value={
                  windowData["Split_Tilt_Rod"]
                }
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
                value={
                  windowData["Tilt_rod_type"]
                }
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
                value={
                  windowData["T_Post_Quantity"]
                }
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
                value={
                  windowData["Distance_n_to_T1_T2_T3"]
                }
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
                value={
                  windowData["Surcharge_Value"]
                }
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
                value={
                  windowData["Price_per_square_meter"]
                }
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
              value={
                windowData["comments"]
              }
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

        {/* <Typography>Add extra materials for this window.</Typography> */}

        {/* add new product in the same window */}
        {/* <div className=" flex flex-col w-full sm:w-2/4 gap-3 mt-2">
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
        </div> */}
      </div>
      <div className="p-4 sm:p-10 flex flex-col gap-4 my-5 rounded-lg">
        {/* <hr className="border-b-2 border-blue-500 mb-6" /> */}

        {/* <Typography>Add a new window Data</Typography> */}
        {/* add new product in the new window */}

        {/* <div className="flex flex-wrap   gap-3 mt-2 ">
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
        </div> */}
        {/* <hr className="border-b-2 border-blue-500 mb-6" />

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
        </div> */}
      </div>

      {/* continue to the next window */}
      {/* <div className="bg-slate-800 min-w-full text-white p-5 flex flex-col gap-4">
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
      </div> */}
    </div>
  );
}
