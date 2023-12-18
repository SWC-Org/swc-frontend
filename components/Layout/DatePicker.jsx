import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";

const CustomDatePicker = ({ label, value, setValue }) => {
  // Use dayjs to get the current date
  const currentDate = dayjs();

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        // value={value || currentDate} // Use the current date as the default value if 'value' is not provided
        onChange={(newValue) => setValue(newValue)}
      />
    </LocalizationProvider>
  );
};

export default CustomDatePicker;
