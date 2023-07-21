import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Typography from "@mui/material/Typography";

type DropdownNormalProps = {
  label: string;
  index: number;
  id: string;
  data: string;
  value: string;
  name: string;
  options: { index: number; data: string }[];
  onChange: (event: SelectChangeEvent) => void;
};

export default function DropdownNormal({
  label,
  id,
  value,
  name,
  options,
  onChange,
}: DropdownNormalProps) {
  const [selectd, setSelected] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    const selectedValue = event.target.value as string;
    setSelected(selectedValue);
  };
  return (
    <div>
      <Typography className="mb-3">{label}</Typography>

      <Box className=" rounded-md bg-white" sx={{ minWidth: 200 }}>
        <FormControl fullWidth>
          <InputLabel id={id}>{label}</InputLabel>
          <Select
            labelId={id}
            id={id}
            value={selectd} // Update the value prop to reflect the selected value
            label={label}
            name={name}
            onChange={handleChange}
            size="medium"
          >
            {options.map((option) => (
              <MenuItem value={option.data.toString()} key={option.index}>
                {option.data}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}
