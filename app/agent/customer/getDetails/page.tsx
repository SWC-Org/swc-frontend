"use client";

import { Alert, Box, TextField, Typography } from "@mui/material";
import CustomIconButton from "@components/Buttons/CustomIconButton";
import React, { useState, useEffect } from "react";

const CustomerDetails = () => {
  const [CustomerName, setCustomerName] = useState("");
  const [CustomerEmail, setCustomerEmail] = useState("");
  const [CustomerContactNumber, setCustomerContactNumber] = useState("");
  const [CustomerAddressLine1, setCustomerAddressLine1] = useState("");
  const [CustomerAddressLine2, setCustomerAddressLine2] = useState("");
  const [CustomerAddressLine3, setCustomerAddressLine3] = useState("");
  const [CustomerAddress, setCustomerAddress] = useState({});
  const [CustomerOrderNumber, setCustomerOrderNumber] = useState("");

  //set the customeraddress

  //handleSubmitAddWindow this will add the costomer in to the database collection customers
  const handleSubmitAddWindow = async (event: void) => {
    // Create the address object using address lines
    const addressObject = {
      addressLine1: CustomerAddressLine1,
      addressLine2: CustomerAddressLine2,
      addressLine3: CustomerAddressLine3,
    };

    // Set the customer address state with the address object
    setCustomerAddress(addressObject);

    // Store the data in the database in the collection customers
    try {
      const response = await fetch("/api/agent/addCustomer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          CustomerName,
          CustomerEmail,
          CustomerContactNumber,
          CustomerAddress: addressObject, // Use the address object here
          CustomerOrderNumber,
        }),
      });
      const data = await response.json();
      alert("Customer Added");
      console.log(data);
    } catch (err) {
      alert("Customer Added Failed");
      console.log(err);
    }
  };

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
                name="CustomerName"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setCustomerName(event.target.value);
                }}
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
                name="CustomerEmail"
                variant="outlined"
                inputProps={{
                  pattern: "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}",
                  title: "Please enter a valid email address",
                }}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setCustomerEmail(event.target.value);
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
                Contact Number
              </Typography>
              <TextField
                type="number"
                required
                id="outlined-required"
                className="w-full rounded-lg h-8"
                placeholder="(+12) 345 345 8989"
                name="CustomerContactNumber"
                variant="outlined"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setCustomerContactNumber(event.target.value);
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
                  name="CustomerAddressLine1"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setCustomerAddressLine1(event.target.value);
                  }}
                />
              </div>
              <div className=" mt-4">
                <TextField
                  required
                  id="outlined-required"
                  placeholder="Adress line 2.."
                  className="w-full rounded-lg h-8 "
                  hiddenLabel
                  name="CustomerAddressLine2"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setCustomerAddressLine2(event.target.value);
                  }}
                />
              </div>
              <div className=" mt-4">
                <TextField
                  required
                  id="outlined-required"
                  placeholder="City"
                  className="w-full rounded-lg h-8"
                  hiddenLabel
                  name="CustomerAddressLine3"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setCustomerAddressLine3(event.target.value);
                  }}
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
                  type="text"
                  InputLabelProps={{
                    shrink: true,
                  }}
                  name="CustomerOrderNumber"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setCustomerOrderNumber(event.target.value);
                  }}
                />
              </div>
              <div className="line-container my-10">
                <hr className="line" />
              </div>
              <CustomIconButton
                onClick={handleSubmitAddWindow}
                fullWidth
                color="primary"
                backgroundColor="#48D89B"
                textColor="#000"
              >
                Continue
              </CustomIconButton>
            </div>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
