import CustomDatePicker from "@components/Layout/DatePicker";
import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

const CustomerDetails = () => {
  return (
    <div className="sm:px-20 px-10 md:px-40 pb-10">
      <div className=" px-5 bg-slate-200 border-4 border-slate-400 flex flex-col w-full pb-10">
        <div className=" my-10 text-3xl font-bold">
          <h2>Add Customer Details</h2>
        </div>
        <div className="h-full w-full">
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1 },
            }}
            noValidate
            autoComplete="off"
            alignItems="stretch"
            className="w-full"
          >
            <div className="mt-5">
              <Typography
                variant="subtitle1"
                component="label"
                htmlFor="outlined-required"
                className="text-l font-bold"
              >
                Cutomer Name
              </Typography>
              <TextField
                required
                id="outlined-required"
                placeholder="Jhon Wick"
                className="w-full rounded-lg h-8"
                hiddenLabel
              />
            </div>
            <div className="mt-5">
              <Typography
                variant="subtitle1"
                component="label"
                htmlFor="outlined-required"
                className="text-l font-bold"
              >
                Email Adress
              </Typography>
              <TextField
                type="email"
                required
                id="outlined-required"
                className="w-full rounded-lg h-8"
                placeholder="myemail@cyahoo.om"
                label=""
                variant="outlined"
                inputProps={{
                  pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}",
                  title: "Please enter a valid email address",
                }}
              />
            </div>
            <div className="mt-5">
              <Typography
                variant="subtitle1"
                component="label"
                htmlFor="outlined-required"
                className="text-l font-bold"
              >
                Cutomer Adress
              </Typography>
              <div className=" mt-4">
                <TextField
                  required
                  id="outlined-required"
                  placeholder="Adress line 1.."
                  className="w-full rounded-lg h-8"
                  hiddenLabel
                />
              </div>
              <div className=" mt-4">
                <TextField
                  required
                  id="outlined-required"
                  placeholder="Adress line 2.."
                  className="w-full rounded-lg h-8 "
                  hiddenLabel
                />
              </div>
              <div className=" mt-4">
                <TextField
                  required
                  id="outlined-required"
                  placeholder="City"
                  className="w-full rounded-lg h-8"
                  hiddenLabel
                />
              </div>
              <div className="line-container my-10">
                <hr className="line" />
              </div>
              {/* <CustomDatePicker label="Enter Date" /> */}
              <div className="mt-5 flex flex-col items-start">
                <Typography
                  variant="subtitle1"
                  component="label"
                  htmlFor="outlined-required"
                  className="text-l font-bold"
                >
                  Order Number
                </Typography>
                <TextField
                  required
                  id="outlined-number"
                  className="w-100 rounded-lg h-8"
                  hiddenLabel
                  type="number"
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </div>
              <div className="line-container my-10">
                <hr className="line" />
              </div>
              <Button
                variant="contained"
                className="bg-green-500 hover:bg-green-600"
              >
                Add Window Data
              </Button>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
