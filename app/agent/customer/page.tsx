"use client";
import * as React from "react";
import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import CustomerDetail from "@components/agent/CustomerDetailsComponent";
import Products from "@components/agent/ProductsComponent";
import Review from "@components/agent/ReviewComponent";
import dayjs, { Dayjs } from "dayjs";

const steps = ["Customer Details", "Add Windows", "Review your order"];

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [customerAdressLine1, setCustomerAdressLine1] = useState("");
  const [customerAdressLine2, setCustomerAdressLine2] = useState("");
  const [customerCity, setCustomerCity] = useState("");
  const [dateValue, setDateValue] = useState<Dayjs | null>(dayjs("2022-04-17"));
  const [window_data, setWindow_data] = useState([]);

  const window_data_deleteHandler = (id: number) => {
    const arrayWithoutD = window_data.filter(function (data) {
      return data["id"] !== id;
    });
    setWindow_data(arrayWithoutD);
  };

  const window_data_editHandler = (id: number) => {};

  function getStepContent(step: number) {
    switch (step) {
      case 0:
        return (
          <CustomerDetail
            customerName={customerName}
            setCustomerName={setCustomerName}
            customerEmail={customerEmail}
            setCustomerEmail={setCustomerEmail}
            customerAdressLine1={customerAdressLine1}
            setCustomerAdressLine1={setCustomerAdressLine1}
            customerAdressLine2={customerAdressLine2}
            setCustomerAdressLine2={setCustomerAdressLine2}
            customerCity={customerCity}
            setCustomerCity={setCustomerCity}
            dateValue={dateValue}
            setDateValue={setDateValue}
          />
        );
      case 1:
        return (
          <Products
            window_data={window_data}
            window_data_deleteHandler={window_data_deleteHandler}
            window_data_editHandler={window_data_editHandler}
          />
        );
      case 2:
        return <Review />;
      default:
        throw new Error("Unknown step");
    }
  }

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container >
        <Paper
          variant="outlined"
          sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
        >
          <Typography component="h1" variant="h4" align="center">
            Place a Order
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your order.
              </Typography>
              <Typography variant="subtitle1">
                Your order number is #2001539. We have emailed your order
                confirmation, and will send you an update when your order has
                shipped.
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                <Button
                  variant="contained"
                  className="bg-green-500 hover:bg-green-600"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? "Place order" : "Next"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      </Container>
    </React.Fragment>
  );
}
