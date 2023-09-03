"use client"

import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';


const CutomDatePicker = ({label,value,setValue}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker label={label} 
      value={value}
      onChange={(newvalue)=>setValue(newvalue)}
      />
  </LocalizationProvider>
  )
}

export default CutomDatePicker
