import React from "react";
import TextField from "@mui/material/TextField";

type CustomTextFieldProps = {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  id: string;
  label: string;
  type: string;
  width?: string;
};

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  name,
  id,
  label,
  type,
  width = "100%",
}) => {
  const inputStyle = {
    width: width,
  };

  return (
    <TextField
      name={name}
      id={id}
      label={label}
      type={type}
      fullWidth
      margin="none"
      style={inputStyle}
      size="medium"
    />
  );
};

export default CustomTextField;
